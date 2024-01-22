# fontMini

提取需要的文字

## 使用方式

1. 把完整字体包放入fonts目录下
2. 把需要的文字写入keywords.txt中
3. 执行提取命令：node index.js ./fonts/AlibabaHealthFont-85B.ttf keywords.txt
4. 需要的文字就提取到mini目录下了，文件名与原字体包一致

注意：提取完一定要在index.html中测试一下是否提取了所有文字，如果有个别文字没有提取成功，可尝试多次提取