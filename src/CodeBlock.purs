module CodeBlock where

import Prelude
import Data.Array ((!!))
import Data.Nullable (Nullable)
import Debug.Trace (trace)
import Effect.Class.Console (log)
import Effect.Unsafe (unsafePerformEffect)
import React.Basic.DOM (CSS, css)
import React.Basic.Hooks (Component, JSX, component)
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

-- | We're currently 'unsafeCoerce'-ing this in the only place where it is
-- | currently being used, so can probably get rid of the types here (use
-- | Foreign something or other?)
mkCodeBlock ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: Nullable String
    , style :: CSS
    }
mkCodeBlock = do
  codeBlock <- mkCodeBlock'
  component "CodeBlock" \props ->
    pure (codeBlock props { style = css { color: "red" } })

mkCodeBlock' ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: Nullable String
    , style :: CSS
    }
mkCodeBlock' = codeBlock_

foreign import codeBlock_ ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: Nullable String
    , style :: CSS
    }
