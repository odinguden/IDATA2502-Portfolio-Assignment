import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Description from '../Description.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Description, { props: { title:"Test Title", description:"test" } })
    expect(wrapper.text()).toContain('Test Title')
  })
})
