document.addEventListener('DOMContentLoaded', init)

function init() {
  const resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', reset)
  reset()
}

function reset() {
  const canvas = document.getElementById('dungeon')
  const ctx = canvas.getContext('2d')

  canvas.width = WIDTH
  canvas.height = HEIGHT
  ctx.width = WIDTH
  ctx.height = HEIGHT


  const maxAttempts = 1000
  let rects = []
  for (let i = 0; i < maxAttempts; i++) {
    let rect = new Rect(600, 300, 200, 200)  
    if (!intersectsAny(rects, rect)) {
      rects.push(rect)
    }
  }

  rects = rects.filter(rect => {
    let isOffTopLeft = rect.xx < 0 || rect.yy < 0;
    let isOffBotRight = (rect.xx + rect.width > 600) || (rect.yy + rect.height > 300)
    return !(isOffTopLeft || isOffBotRight)
  })

  for (let rect of rects) {
    RectangleDrawer.draw(ctx, rect)
  }
}

function intersectsAny(rects, candidate) {
  for (rect of rects) {
    if (rect.intersectsRect(candidate)) {
      return true
    }
  }
  return false
}
