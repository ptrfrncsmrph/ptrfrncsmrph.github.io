module Page where

import Prelude
import Effect.Class.Console (log)
import Effect.Unsafe (unsafePerformEffect)
import Layout as Layout
import React.Basic.DOM as R
import React.Basic.Hooks (Component, JSX, component, useEffectOnce)
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

mkPage :: Component { children :: Array JSX }
mkPage = do
  layout <- Layout.mkLayout
  component "Page" \{ children } -> React.do
    useEffectOnce do
      log $ unsafeCoerce children
      pure mempty
    pure
      $ layout
          { children
          , description: "Blog"
          , pageTitle: "Blog"
          }

-- | Interop
page = unsafePerformEffect mkPage
