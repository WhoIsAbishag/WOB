post = input('What To Add To HTML?: ')
print('Post: ',post)

with open(r"index.html", 'r+') as fp:
    # read an store all lines into list
    lines = fp.readlines()
    # move file pointer to the beginning of a file
    fp.seek(0)
    # truncate the file
    fp.truncate()

    # start writing lines except the last line
    # lines[:-1] from line 0 to the second last line
    #fp.writelines(lines[:-1])
    # lines[:-N] to delete last N lines
    fp.writelines(lines[:-1])

dots = "............."
appendMe = '<p></p>'
appendBody = '<body><div id="900 WOB"><button id="SiyaBOTTOM">WOB</button></div><h1>'
appendBodyClose = '<button id="SiyaBOTTOM">WOB</button><p></p><script src="script.js"></script></body></html>'

appendFile = open('index.html','a')

#appendFile.write(appendBody)
appendFile.write(appendMe)
appendFile.write(dots)
appendFile.write(appendMe)
appendFile.write(post)
appendFile.write(appendMe)
appendFile.write(appendBodyClose)
appendFile.close()


readMe = open('index.html','r').readlines()
print(readMe)

