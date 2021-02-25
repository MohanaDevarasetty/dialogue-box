# dialogue_box

## Library setup
```
npm install
```

### Compiles, minifies and will create package in main folder structure
```
npm run build-lib
```

### Lints and fixes files
```
npm run lint
```

### Install package in project
```
npm install <location to main folder structure>/dialogue-box-0.1.0.tgz
```

## Importing in project
```
<template>
<alert-component
        :headerTitle="header"
        :message="body"
        :footer="footer"
        @close="close"
      />
</template>
<script>
import  AlertComponent  from 'dialogue-box'
export default {
    components: {
        AlertComponent
    }
}
</script>
```


