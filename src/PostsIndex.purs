module PostsIndex where

import Prelude
import Effect.Unsafe (unsafePerformEffect)
import Layout as Layout
import React.Basic.Hooks (Component, JSX, component)

mkPostsIndex :: Component { children :: Array JSX }
mkPostsIndex = do
  layout <- Layout.mkLayout
  component "PostsIndex" \{ children } -> React.do
    pure
      $ layout
          { children
          , description: "Blog"
          , pageTitle: "Blog"
          }

-- | Interop
postsIndex :: { children :: Array JSX } -> JSX
postsIndex = unsafePerformEffect mkPostsIndex
