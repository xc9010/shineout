import { tooltipClass } from '../styles'
import ready from '../utils/dom/ready'

const div = document.createElement('div')
let timer
div.style.display = 'none'

ready(() => {
  document.body.appendChild(div)
})

const arrow = document.createElement('div')
arrow.className = tooltipClass('arrow')
div.appendChild(arrow)

const inner = document.createElement('div')
inner.className = tooltipClass('inner')
div.appendChild(inner)

let currentId

export function hide() {
  if (timer) clearTimeout(timer)
  div.style.display = 'none'
  div.className = ''
  currentId = undefined
}

function clickaway() {
  hide()
  document.removeEventListener('click', clickaway)
}

export function show(props, id, innerStyle) {
  const { position, style, tip, trigger, animation } = props

  currentId = id

  div.style.cssText = 'display: none'
  Object.keys(style).forEach(k => {
    div.style[k] = style[k]
  })

  const className = tooltipClass('_', 'in', position, animation && 'animation')

  // fix safari
  timer = setTimeout(() => {
    div.style.display = 'block'
    div.className = className
  }, 0)

  inner.innerText = tip
  inner.setAttribute('style', false)
  if (innerStyle) {
    Object.keys(innerStyle).forEach(k => {
      inner.style[k] = typeof innerStyle[k] === 'number' ? `${innerStyle[k]}px` : innerStyle[k]
    })
  }

  if (trigger === 'click') {
    document.addEventListener('click', clickaway)
  }
}

export function move(id, pos) {
  if (id === currentId) {
    // eslint-disable-next-line no-return-assign
    Object.keys(pos).map(key => (div.style[key] = pos[key]))
  }
}

export function isCurrent(id) {
  return id === currentId
}
