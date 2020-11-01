module PostsIndex where

import Prelude
import Effect (Effect)
import Effect.Class.Console (log)
import Effect.Console (logShow)
import Effect.Uncurried (EffectFn1)
import Effect.Unsafe (unsafePerformEffect)
import Foreign (Foreign)
import Layout as Layout
import React.Basic.DOM as R
import React.Basic.Hooks (Component, JSX, component, useEffectAlways, useEffectOnce)
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
postsIndex = unsafePerformEffect mkPostsIndex
