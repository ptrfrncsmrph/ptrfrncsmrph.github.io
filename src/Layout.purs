module Layout where

import Prelude
import Next as Next
import React.Basic.DOM as R
import React.Basic.Hooks (Component, JSX, component, fragment)
import React.DOM (meta, title')
import React.DOM.Props (Props)
import React.DOM.Props as Props
import Unsafe.Coerce (unsafeCoerce)

-- @TODO: These seem to be necessary in order to avoid calling 'React.forwardRef' 
-- (which 'React.Basic.DOM.Internal.unsafeCreateDOMComponent' uses)
-- https://github.com/lumihq/purescript-react-basic-dom/blob/528627d4d44189add3bda6244807ca249910a9dd/src/React/Basic/DOM/Internal.js#L27
unsafeMeta :: Array Props -> JSX
unsafeMeta = meta >>> unsafeCoerce

unsafeTitle' :: Array JSX -> JSX
unsafeTitle' = map unsafeCoerce >>> title' >>> unsafeCoerce

mkLayout :: Component { children :: Array JSX, pageTitle :: String, description :: String }
mkLayout = do
  head <- Next.mkHead
  component "Layout" \props ->
    pure
      $ fragment
          [ head
              { children:
                  [ unsafeMeta
                      [ Props.name "viewport"
                      , Props.content "width=device-width, initial-scale=1"
                      ]
                  , unsafeMeta
                      [ Props.charSet "utf-8"
                      ]
                  , unsafeMeta
                      [ Props.name "Description"
                      , Props.content props.description
                      ]
                  , unsafeTitle' [ R.text props.pageTitle ]
                  ]
              }
          , R.main_ props.children
          ]
