import React from 'react';
import { isMono } from './isMono';
import * as assert from 'assert';

describe('test isMono function', () => {
  test('[1, 2, 3]', () => {
    const result = isMono([1, 2, 3]);

    assert.strictEqual(result, true);
  });

  // Добавьте сюда ваши тесты
})

