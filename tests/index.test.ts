import demo from '@/index'

describe('Demo', () => {
  test('prints helloworld', () => {
    let dump: string = ''
    console.log = (...args: any[]) => dump = args.join(' ')

    demo()
    expect(dump).toBe('helloworld')
  })
})
