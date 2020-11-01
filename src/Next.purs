module Next where

import React.Basic.Hooks (Component, JSX)

mkHead ::
  Component
    { children :: Array JSX
    }
mkHead = head_

foreign import head_ ::
  Component
    { children :: Array JSX }
