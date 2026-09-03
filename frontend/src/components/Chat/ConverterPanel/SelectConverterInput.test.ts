import { filterPickerConverters } from './SelectConverterInput'

describe('filterPickerConverters', () => {
  it('hides TokenBijectionConverter until the GUI can provide its tokenizer', () => {
    const converters = filterPickerConverters([
      { converter_type: 'Base64Converter' },
      { converter_type: 'TokenBijectionConverter' },
    ])

    expect(converters.map((converter) => converter.converter_type)).toEqual(['Base64Converter'])
  })

  it('preserves supported converters', () => {
    const converters = filterPickerConverters([
      { converter_type: 'Base64Converter' },
      { converter_type: 'CaesarConverter', is_llm_based: false },
    ])

    expect(converters).toHaveLength(2)
  })
})
