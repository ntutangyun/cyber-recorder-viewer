find modules/ cyber/ -name "*.proto" | grep -v node_modules | xargs protoc
--js_out=import_style=library=apollo/protos,binary:protobuf_out/gen

The project uses the following library:

* google's closure-library
* google's google-protobuf.js