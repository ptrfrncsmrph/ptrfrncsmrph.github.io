module Page where

import Prelude
import CodeBlock as CodeBlock
import Data.Tuple.Nested ((/\))
import Effect.Unsafe (unsafePerformEffect)
import Foreign.Object (fromFoldable)
import Layout as Layout
import MultiCodeBlock as MultiCodeBlock
import Next as Next
import React (ReactElement)
import React.Basic.Hooks (Component, JSX, component)
import React.Basic.Hooks as React
import React.Basic.DOM as R
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
          }

-- mkCode :: Component { className :: String }
-- mkCode = do 
-- type Component'
--   = { className :: String
--     , element :: JSX
--     , name :: String
--     }
-- wrap :: Component' -> forall r. Component { className :: String | r }
-- wrap c = do
--   component c.name \props ->
--     pure  c.element
-- | Interop
page :: { children :: Array JSX } -> JSX
page = unsafePerformEffect mkPage
