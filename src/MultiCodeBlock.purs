module MultiCodeBlock where

import Prelude
import Data.Array ((!!))
import Data.Maybe (Maybe(..))
import React.Basic.DOM as R
import React.Basic.Hooks (Component, component, useState', (/\))
import React.Basic.Hooks as React
import Unsafe.Coerce (unsafeCoerce)

data Language
  = PureScript
  | TypeScript
  | Haskell
  | Rust

type Gross
  = { props :: { children :: { props :: { className :: String } } } }

mkMultiCodeBlock :: Component { children :: Array Gross }
mkMultiCodeBlock = do
  component "MultiCodeBlock" \{ children } -> React.do
    selectedIx /\ setSelectedIx <- useState' 0
    let
      codes = map (\c -> parseLanguage c /\ c) children
    pure
      $ case codes !! selectedIx of
          Just (lang /\ node) ->
            R.div_
              [ R.text "lang"
              , unsafeCoerce node
              ]
          Nothing -> R.text "NOthing"

parseLanguage :: Gross -> Maybe Language
parseLanguage { props } = case props.children.props.className of
  "language-purescript" -> Just PureScript
  "language-typescript" -> Just TypeScript
  "language-haskell" -> Just Haskell
  "language-rust" -> Just Rust
  _ -> Nothing
