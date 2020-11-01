module Posts where

type Post_
  = { filePath :: String
    , urlPath :: String
    , title :: String
    , date :: String
    , description :: String
    }

foreign import posts_ :: Array Post_
