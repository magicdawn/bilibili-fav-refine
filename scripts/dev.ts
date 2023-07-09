#!/usr/bin/env tsx

import { join } from 'path'
import { pathToFileURL } from 'url'

const file = join(__dirname, '../bilibili-fav-refine.user.css')
const fileUrl = pathToFileURL(file)
console.log('install url: %s', fileUrl)
