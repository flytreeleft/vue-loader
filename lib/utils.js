function isIframe(node) {
  return node && node.tagName && node.tagName.toLowerCase() === 'iframe'
}

function getWindow(target) {
  if (!target) return null
  if (target.window === target) {
    return target
  } else if (isIframe(target)) {
    return target.contentWindow || target.contentDocument
  } else if (target instanceof Document) {
    return target.defaultView
  } else {
    return target.ownerDocument.defaultView
  }
}

function getDocument(target) {
  var win = getWindow(target)
  return win ? win.document : null
}

module.exports = {
  getWindow: getWindow,
  getDocument: getDocument
}
