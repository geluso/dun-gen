class RectangleDrawer {
  static draw(ctx, rect) {
    ctx.strokeRect(rect.xx, rect.yy, rect.width, rect.height)
    ctx.strokeStyle = 'gray'
    ctx.fillStyle = 'gray'
    ctx.fillRect(rect.xx, rect.yy, rect.width, rect.height)
  }
}
