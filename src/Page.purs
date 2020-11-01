module Page where

import Prelude
import Data.Tuple.Nested ((/\))
import Effect.Class.Console (log)
import Effect.Unsafe (unsafePerformEffect)
import Foreign.Object (fromFoldable)
import Layout as Layout
import Next as Next
import React.Basic.Hooks (Component, JSX, component, useEffectOnce)
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

mkPage :: Component { children :: Array JSX }
mkPage = do
  layout <- Layout.mkLayout
  mdxProvider <- Next.mkMDXProvider
  component "Page" \{ children } -> React.do
    useEffectOnce do
      log $ unsafeCoerce children
      pure mempty
    pure
      $ mdxProvider
          { children:
              [ layout
                  { children
                  , description: "Blog"
                  , pageTitle: "Blog"
                  }
              ]
          , components:
              -- fromFoldable [ "MultiCodeBlock" /\ unsafeCoerce layout ]
              fromFoldable []
          }

-- | Interop
page :: { children :: Array JSX } -> JSX
page = unsafePerformEffect mkPage
