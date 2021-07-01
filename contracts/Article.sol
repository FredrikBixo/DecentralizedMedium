pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract Article is ERC721 {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string private baseURI;

  mapping (uint256 => string) private _tokenURIs;

  constructor() public ERC721("Article", "A") {
      baseURI = "https://ipfs.io/ipfs/";
  }

  function mintItem(address to, string memory tokenURI)
      public
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();
      _mint(to, id);
      _setTokenURI(id, tokenURI);

      return id;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

      string memory _tokenURI = _tokenURIs[tokenId];
      string memory base = _baseURI();

      // If there is no base URI, return the token URI.
      if (bytes(base).length == 0) {
          return _tokenURI;
      }
      // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
      if (bytes(_tokenURI).length > 0) {
          return string(abi.encodePacked(base, _tokenURI));
      }
      // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
      return string(abi.encodePacked(base, tokenId));
  }

  function _baseURI() internal virtual view override returns (string memory) {
      return baseURI;
  }

  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
    require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
}
