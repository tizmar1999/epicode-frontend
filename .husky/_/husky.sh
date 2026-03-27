#!/bin/sh

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "$1"
  }

  readonly hook_name="$(basename "$0")"
  debug "husky > starting $hook_name (version 9)"

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
fi
