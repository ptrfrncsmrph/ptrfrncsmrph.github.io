module CodeBlock where

import Prelude
import Data.Array ((!!))
import Debug.Trace (trace)
import Effect.Class.Console (log)
import Effect.Unsafe (unsafePerformEffect)
import React.Basic.Hooks (Component, JSX, component)
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

mkCodeBlock ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: String
    }
mkCodeBlock = do
  codeBlock <- mkCodeBlock'
  component "CodeBlock" \props ->
    trace (unsafeCoerce props.children !! 4) \_ -> React.do
      pure (codeBlock props)

mkCodeBlock' ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: String
    }
mkCodeBlock' = codeBlock_

foreign import codeBlock_ ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: String
    }
