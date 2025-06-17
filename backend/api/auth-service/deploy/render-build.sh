#!/bin/bash
cp -r ../../prisma ./prisma
npm install
npx prisma generate --schema=schema.prisma