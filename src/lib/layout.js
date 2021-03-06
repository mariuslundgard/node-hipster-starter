// @flow

type Data = {
  lang: string,
  title: string,
  head: string,
  body: string
}

function layout (data: Data) {
  return [
    '<!DOCTYPE html>',
    `<html lang="${data.lang}">`,
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${data.title}</title>`,
    data.head,
    '</head>',
    '<body>',
    data.body,
    '</body>',
    '</html>'
  ].join('')
}

export default layout
