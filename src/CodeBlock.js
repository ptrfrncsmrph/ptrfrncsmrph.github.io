const { default: Highlight, defaultProps } = require("prism-react-renderer");
const React = require("react");

// Nix
defaultProps.Prism.languages.nix = {
  comment: /\/\*[\s\S]*?\*\/|#.*/,
  string: {
    pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
        lookbehind: !0,
        inside: { antiquotation: { pattern: /^\$(?=\{)/, alias: "variable" } },
      },
    },
  },
  url: [
    /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
    {
      pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
      lookbehind: !0,
    },
  ],
  antiquotation: { pattern: /\$(?=\{)/, alias: "variable" },
  number: /\b\d+\b/,
  keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
  function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
  boolean: /\b(?:true|false)\b/,
  operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
  punctuation: /[{}()[\].,:;]/,
};
defaultProps.Prism.languages.nix.string.inside.interpolation.inside.rest =
  defaultProps.Prism.languages.nix;

// Haskell
defaultProps.Prism.languages.haskell = {
  comment: {
    pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
    lookbehind: !0,
  },
  char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
  string: {
    pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
    greedy: !0,
  },
  keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
  import_statement: {
    pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
    lookbehind: !0,
    inside: { keyword: /\b(?:import|qualified|as|hiding)\b/ },
  },
  builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
  number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
  operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
  hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
  constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
  punctuation: /[{}[\];(),.:]/,
};
defaultProps.Prism.languages.hs = defaultProps.Prism.languages.haskell;

// PureScript
defaultProps.Prism.languages.purescript = defaultProps.Prism.languages.extend(
  "haskell",
  {
    keyword: /\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    "import-statement": {
      pattern: /(^\s*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: !0,
      inside: { keyword: /\b(?:import|as|hiding)\b/ },
    },
    builtin: /\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/,
  }
);
defaultProps.Prism.languages.purs = defaultProps.Prism.languages.purescript;

// TypeScript
defaultProps.Prism.languages.typescript = defaultProps.Prism.languages.extend(
  "javascript",
  {
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
  }
);
defaultProps.Prism.languages.ts = defaultProps.Prism.languages.typescript;

// Rust
defaultProps.Prism.languages.rust = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
  ],
  string: [
    { pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, greedy: !0 },
    { pattern: /b?"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
  ],
  char: {
    pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
    alias: "string",
  },
  "lifetime-annotation": { pattern: /'[^\s>']+/, alias: "symbol" },
  keyword: /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
  attribute: { pattern: /#!?\[.+?\]/, greedy: !0, alias: "attr-name" },
  function: [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/],
  "macro-rules": { pattern: /\w+!/, alias: "function" },
  number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
  "closure-params": {
    pattern: /\|[^|]*\|(?=\s*[{-])/,
    inside: { punctuation: /[|:,]/, operator: /[&*]/ },
  },
  punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
  operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
};

// Diff
(function () {
  var o = /diff-([\w-]+)/i,
    m = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi,
    c = RegExp(
      "(?:__|[^\r\\n<])*(?:\r\\n?|\n|(?:__|[^\r\\n<])(?![^\r\\n]))".replace(
        /__/g,
        m.source
      ),
      "gi"
    ),
    d = defaultProps.Prism.languages.diff.PREFIXES;
  defaultProps.Prism.hooks.add("before-sanity-check", function (e) {
    var a = e.language;
    o.test(a) &&
      !e.grammar &&
      (e.grammar = defaultProps.Prism.languages[a] =
        defaultProps.Prism.languages.diff);
  }),
    defaultProps.Prism.hooks.add("before-tokenize", function (e) {
      var a = e.language;
      o.test(a) &&
        !defaultProps.Prism.languages[a] &&
        (defaultProps.Prism.languages[a] = defaultProps.Prism.languages.diff);
    }),
    defaultProps.Prism.hooks.add("wrap", function (e) {
      var a, s;
      if ("diff" !== e.language) {
        var r = o.exec(e.language);
        if (!r) return;
        (a = r[1]), (s = defaultProps.Prism.languages[a]);
      }
      if (e.type in d) {
        var n,
          i = e.content
            .replace(m, "")
            .replace(/&lt;/g, "<")
            .replace(/&amp;/g, "&"),
          g = i.replace(/(^|[\r\n])./g, "$1");
        n = s
          ? defaultProps.Prism.highlight(g, s, a)
          : defaultProps.Prism.util.encode(g);
        var f,
          t = new defaultProps.Prism.Token("prefix", d[e.type], [
            /\w+/.exec(e.type)[0],
          ]),
          u = defaultProps.Prism.Token.stringify(t, e.language),
          l = [];
        for (c.lastIndex = 0; (f = c.exec(n)); ) l.push(u + f[0]);
        /(?:^|[\r\n]).$/.test(i) && l.push(u),
          (e.content = l.join("")),
          s && e.classes.push("language-" + a);
      }
    });
})();

exports.codeBlock_ = () => ({ className, extraClassName, children }) => {
  return React.createElement(
    Highlight,
    Object.assign(
      {},
      {
        code: children,
        language: className.replace("language-", ""),
      },
      defaultProps
    ),
    ({ className: className_, tokens, getLineProps, getTokenProps }) =>
      React.createElement(
        "code",
        { className: className_ + " " + extraClassName },
        tokens.map((line, i) => {
          const props = getLineProps({ line, key: i });
          props.style = null;
          return React.createElement(
            "div",
            Object.assign({}, { key: i }, props),
            line.map((token, key) => {
              const props = getTokenProps({ token, key });
              props.style = null;
              return React.createElement(
                "span",
                Object.assign({}, { key: key }, props)
              );
            })
          );
        })
      )
  );
};
