window.onload = () => {
  const navSpans = [...document.querySelectorAll("nav > span")]
  const expandSpans = [...document.querySelectorAll(".expand-parent")]

  let activeSpans = Object.keys(navSpans).reduce(
    (acc, key) => Object.assign(acc, { [key]: new Set([]) }),
    {}
  )

  navSpans.forEach((navSpan, ix) => {
    navSpan.addEventListener("mouseenter", () => {
      expandSpans[ix].classList.add("active")
      const uid = Date.now()
        .toString()
        .slice(5)
      activeSpans[ix].add(uid)

      setTimeout(() => {
        activeSpans[ix].delete(uid)
      }, 500)
    })

    navSpan.addEventListener("mouseleave", () =>
      setTimeout(() => {
        activeSpans[ix].size == 0 && expandSpans[ix].classList.remove("active")
      }, 500)
    )
  })
}
