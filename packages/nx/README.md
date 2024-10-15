# NXRC - Custom Remote Caching Support

It's with a heavy heart that I’ve decided to fork the core NX package (`nx`). I’ve been a huge supporter of NX for over 6 years, promoting and using it extensively. However, due to the recent decision to move remote caching behind the Powerpack paywall, I feel, on principle, that this fork is necessary until the feature is restored.

note: ONX name is subject to change once pacakge has been created!

## Why Fork NX?

NX has been an amazing tool, but forcing users to pay for something that was previously available, like remote caching, is not acceptable. While I understand NX needs to generate revenue, this move impacts small to medium-sized teams who relied on this functionality. Enterprises might be fine paying for Powerpack, but indie developers should have the freedom to implement their own caching solutions without being forced to buy the entire pack.

This fork restores remote caching through a new `nx.json` config property, giving developers back control over their own remote caching solutions.

For reference, see:

- [NX Issue #28150](https://github.com/Jordan-Hall/nxrc/issues/28150)
- [NX Issue #28434](https://github.com/Jordan-Hall/nxrc/issues/28434)
- [Custom Remote Cache Issue #48](https://github.com/NiklasPor/nx-remotecache-custom/issues/48)

## Key Features

- **1-to-1 Compatibility**: This fork maintains full compatibility with the original NX package, so swapping is straightforward.
- **Custom Remote Caching**: Indie developers can create their own remote caching setup without relying on Powerpack.
- **Rust API**: This fork will also aim to support a pure Rust version of NX in the future.

## Installation (soon)

To use this fork:

```
npm install nxrc
```

For commands replace `nx` with `nxrc`

## Contributing

Contributions are welcome! If you want to improve this project or help keep remote caching open for the community, feel free to submit issues or pull requests.

Here’s a revised section that maintains respect for the NX team while clarifying that there is no official support for this fork:

---

## Acknowledgements

I’ve been a dedicated user and advocate of NX for over six years, and I want to acknowledge the incredible work of the NX team. This fork is not created in opposition to their efforts, but rather out of necessity. The recent changes that moved remote caching behind the Powerpack paywall have left many in the community, particularly indie developers and smaller teams, without access to essential functionality. While this fork restores that functionality, it’s important to note that **this project is entirely independent and has no affiliation with or support from the official NX team**.

## Useful links to NX

For those continuing to use NX or wanting to learn more about their official offerings, here are some helpful resources:

- [NX Documentation](https://nx.dev/docs)
- [NX Blog](https://nx.dev/blog)
- [NX Community](https://nx.dev/community)
- [NX YouTube Channel](https://www.youtube.com/@NxDevtools)
- [NX Twitter/X](https://x.com/nxdevtools)
