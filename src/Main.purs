module Main where

import Prelude
import Effect.Unsafe (unsafePerformEffect)
import React.Basic.DOM as R
import React.Basic.Emotion as E
import React.Basic.Hooks (Component, JSX, component)

data Size
  = S
  | M
  | L

border :: forall r. { borderSize :: Size, borderColor :: String | r } -> E.Style
border { borderSize, borderColor } =
  E.css
    { borderWidth:
        E.px case borderSize of
          S -> 1
          M -> 2
          L -> 4
    , borderColor: E.str borderColor
    , borderRadius: E.rem 0.5
    , borderStyle: E.str "solid"
    , padding: E.str "16px 24px"
    }

mkMain :: Component Unit
mkMain = do
  component "Main" \_ -> React.do
    pure $
      E.element R.h1' {
        className: "",
        css: (border {borderSize: M, borderColor: "red"}),
        children: [
          R.text ("Ord")
        ]
      }

main :: JSX
main = unsafePerformEffect mkMain unit
