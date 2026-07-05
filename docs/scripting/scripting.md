---
sidebar_position: 1
---

# Scripting

## Overview

It is possible to embed an interpreter for scripting languages like [CPython](https://github.com/python/cpython) and [Lua](https://www.lua.org/) inside a compiled Swift based program.

This makes it possible to support script based acess to the functions provided by the Swift based host application. This is an excellent way to enable workflow automation.

ML Agent based scripting is possible from a Swift app with [MCPs (Model Context Protocol)](https://modelcontextprotocol.io/docs/getting-started/intro) interfaces that typically work using stdio/http, as well as [OpenAI compatible REST endpoints](https://developers.openai.com/api/reference/overview) that allow for interactive sessions.

## Topics

- Lua
- Python
- ML Agents
	- MCPs
	- OpenAI Compatible REST Endpoints
