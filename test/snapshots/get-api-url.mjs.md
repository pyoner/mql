# Snapshot report for `test/get-api-url.mjs`

The actual snapshot is saved in `get-api-url.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## node » url without query params

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## node » apiKey

> Snapshot 1

    [
      'https://pro.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {
          'x-api-key': 'foobar',
        },
        responseType: 'json',
        retry: undefined,
      },
    ]

## node » flatten options

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&overlay.browser=dark',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## node » don't pass null

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## node » don't pass undefined

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## node » timeout

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&timeout=15000',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&timeout=28000',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » url without query params

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » apiKey

> Snapshot 1

    [
      'https://pro.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {
          'x-api-key': 'foobar',
        },
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » flatten options

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&overlay.browser=dark',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » don't pass null

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » don't pass undefined

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

## lightweight » timeout

> Snapshot 1

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&timeout=15000',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]

> Snapshot 2

    [
      'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&timeout=28000',
      {
        cache: undefined,
        headers: {},
        responseType: 'json',
        retry: undefined,
      },
    ]