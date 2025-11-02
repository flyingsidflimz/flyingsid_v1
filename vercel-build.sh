#!/bin/bash
echo "🔧 Running clean Vercel build..."
npm ci --no-audit --prefer-offline
npx vite build
