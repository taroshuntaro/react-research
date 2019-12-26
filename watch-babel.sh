# before transpile source path
BEFORE_CONV_PATH=src
# after transpile source path
AFTER_CONV_PATH=manage/js/components

# execute npx command
npx babel --watch $BEFORE_CONV_PATH --out-dir $AFTER_CONV_PATH --presets @babel/preset-react