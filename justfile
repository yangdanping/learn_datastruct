dev chapter:
    #!/usr/bin/env bash
    DIR=$(ls -d {{ chapter }}_* 2>/dev/null | head -n 1)
    if [ -z "$DIR" ]; then
        echo "❌ 错误: 未找到索引为 '{{ chapter }}' 的章节目录"
        exit 1
    fi

    echo "🚀 正在运行章节: $DIR"
    node --watch "./$DIR/test.js"
