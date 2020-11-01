module Page where

import Prelude
import CodeBlock as CodeBlock
import Data.Tuple.Nested ((/\))
import Effect.Unsafe (unsafePerformEffect)
import Foreign.Object (fromFoldable)
import Layout as Layout
import MultiCodeBlock as MultiCodeBlock
import Next as Next
import React.Basic.Hooks (Component, JSX, component)
import Unsafe.Coerce (unsafeCoerce)

mkPage :: Component { children :: Array JSX }
mkPage = do
  layout <- Layout.mkLayout
  mdxProvider <- Next.mkMDXProvider
  multiCodeBlock <- MultiCodeBlock.mkMultiCodeBlock
  codeBlock <- CodeBlock.mkCodeBlock
  component "Page" \{ children } -> React.do
    -- useEffectOnce do
    --   log $ unsafeCoerce children
    --   pure mempty
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
              fromFoldable
                [ "code" /\ unsafeCoerce codeBlock
                , "MultiCodeBlock" /\ unsafeCoerce multiCodeBlock
                ]
          -- fromFoldable []
          }

-- | Interop
page :: { children :: Array JSX } -> JSX
page = unsafePerformEffect mkPage
