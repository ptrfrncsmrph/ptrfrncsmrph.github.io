module CodeBlock where

import React.Basic.Hooks (Component, JSX)

mkCodeBlock ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: String
    }
mkCodeBlock = codeBlock_

foreign import codeBlock_ ::
  Component
    { children :: Array JSX
    , className :: String
    , extraClassName :: String
    }
