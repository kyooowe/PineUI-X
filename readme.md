<img style="border-radius: 15px;" src="https://github.com/kyooowe/PineUI/blob/master/public/bg-github.png" />

# Pine UI X
[![Node JS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()

Pine UI X is an incredibly useful command-line interface tool designed specifically for Pine UI. It empowers you to effortlessly create and generate services with utmost convenience and efficiency.

# Usage

#### Prerequisites
- Install [NodeJS](https://nodejs.org/en) which includes [Node Package Manager](https://docs.npmjs.com/getting-started).

This is an example of how you can utilize Pine UI X to quickly scaffold a new project.
```
npx pineuix --vite
```
and this is an example that showcases how to generate a service using Pineuix.
```
npx pineuix --react pmod items
```

#### Arguments
This presents an argument about the pattern of CLI commands in Pineuix specifically related to generating services.
- framework - When it comes to frameworks, you have a choice between React and Express as the two available options.
- service - You can find all the available services in the command section.
- fileName - Output filename of the service. (You can still folder path eg. utils/item, utils is the folder and item is the fileName)
```
npx pineuix --{framework} {service} {fileName}
```


# Commands
This is the command you can utilize to leverage the capabilities of Pine UI X.

#### Template
| Command | Description | Size | Snippet | 
| :---: | :--- | :--- | :--- | 
| `--vite` | Scaffold new Pine UI project using Vite | 1.25MB (node_modules not included) | `npx pineuix --vite` |
| `--nextjs` | Scaffold new Pine UI project using Next.JS | NA (still in progress) | `npx pineuix --nextjs` |

#### Services
| Command | Description | HasMultipleFiles | Framework | Snippet |
| :---: | :--- | :--- | :--- | :--- |
| `mod` | Generate Module | ⨉ | React | `npx pineuix --react mod filename` |
| `pge` | Generate Page | ⨉ | React | `npx pineuix --react pge filename` |
| `pmod` | Generate Page and Module | ✓ | React | `npx pineuix --react pmod filename` |
| `crud` | Generate CRUD | ✓ | React | `npx pineuix --react crud filename` |

# Frequently Asked Questions (FAQs)
<details>
  <summary>Should I use Pine UI X from Pine UI?</summary>
  
By harnessing the capabilities of Pine UI X, you will experience a substantial acceleration in your work within the Pine UI environment, enabling you to accomplish tasks with exceptional speed and efficiency.
</details>

<details>
  <summary>Can I still use Pine UI without Pine UI X?</summary>

  Although optional, Pine UI X serves as a valuable tool within the Pine UI ecosystem, allowing developers to expedite development processes by automating tasks. However, it's important to note that you can still utilize Pine UI effectively even without employing Pine UI X
</details>

# License
The code in this repository is released under the MIT license as found in the [License file](https://github.com/kyooowe/PineUI-CLI/blob/master/LICENSE).

# Author
-   [@kyooowe](https://www.github.com/kyooowe)
