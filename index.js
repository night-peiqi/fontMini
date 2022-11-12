const FontMin = require('fontmin');
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const resolve = (dir) => path.join(__dirname, dir)

const params = process.argv.splice(2)
// 字体包路径
const fontBakPath = resolve(params[0])
// 需要提取的文字文件
const textPath = resolve(params[1])
const word = fs.readFileSync(textPath, {encoding: 'utf-8'})

new FontMin().src(fontBakPath).dest('./mini').use(FontMin.glyph({
  text: word,
  hinting: false
})).run((res) => {
  console.log(chalk.green('您用的文字已提取到mini文件夹，请查收！'))
});
