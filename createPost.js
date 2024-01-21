const fs = require("fs")
const path = require("path")

const getImagesFromDirectory = (title) => {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"]
  const imagesDirectory = path.join(
    __dirname,
    `src/posts/${title.toLowerCase().split(" ").join("-")}`
  )
  return fs
    .readdirSync(imagesDirectory)
    .filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase())
    )
    .map((file) => path.join(file))
}

const createMarkdownFile = (title, author, date, tags, images) => {
  const postDirectory = path.join(
    __dirname,
    `src/posts/${title.toLowerCase().split(" ").join("-")}`
  )
  if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory)
  }

  const filename = `index.md`
  const filePath = path.join(postDirectory, filename)

  let frontMatterImages = images
    .map((image) => `  - image: ${image}`)
    .join("\n")

  let frontMatterTags = tags
    .split("/")
    .map((tag) => `  - tag: ${tag}`)
    .join("\n")

  const content = `---
contentType: post
title: "${title}"
date: "${date}"
author: "${author}"
categories:
${frontMatterTags}
imageGallery:
${frontMatterImages}
accentColor: {dark: "#ffffff", light: "#000000"}
---
`

  fs.writeFileSync(filePath, content, "utf8")
  console.log(`Post created: ${filePath}`)
}

const args = process.argv.slice(2)
const title = args[0]
const author = args[1]
const date = args[2]
const tags = args[3]

const images = getImagesFromDirectory(title)

createMarkdownFile(title, author, date, tags, images)
