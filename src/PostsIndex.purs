module PostsIndex where

import Prelude
import Effect.Class.Console (log)
import Effect.Unsafe (unsafePerformEffect)
import Layout as Layout
import React.Basic.Hooks (Component, JSX, component, useEffectOnce)
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

mkPostsIndex :: Component { children :: Array JSX }
mkPostsIndex = do
  layout <- Layout.mkLayout
  component "Index" \{ children } -> React.do
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
postsIndex :: { children :: Array JSX } -> JSX
postsIndex = unsafePerformEffect mkPostsIndex
