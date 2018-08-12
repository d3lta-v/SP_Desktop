#!/bin/bash

rm -rf ./doc
./node_modules/typedoc/bin/typedoc --theme markdown --mode modules --out doc
