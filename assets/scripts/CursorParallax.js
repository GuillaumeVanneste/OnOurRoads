class CursorParallax
{
    constructor()
    {
        this.setItems()
        this.setMouse()
        this.setRAF()
    }

    setItems()
    {
        const $elements = document.querySelectorAll('.js-cursor-parallax')
        
        this.items = []

        for(const $element of $elements)
        {
            const item = {}
            item.$element = $element
            item.offsetX = 0
            item.offsetY = 0
            item.amplitude = parseFloat($element.dataset.amplitude)
            console.log(item.amplitude)

            this.items.push(item)
        }

        console.log(this.items)
    }

    setMouse()
    {
        this.mouse = {
            x: 0,
            y: 0
        }

        let innerWidth = window.innerWidth
        let innerHeight = window.innerHeight

        window.addEventListener('resize', () =>
        {
            innerWidth = window.innerWidth
            innerHeight = window.innerHeight    
        })

        window.addEventListener('mousemove', (event) =>
        {
            this.mouse.x = event.clientX / innerWidth - 0.5
            this.mouse.y = event.clientY / innerHeight - 0.5
        })
    }

    setRAF()
    {
        const loop = () =>
        {
            window.requestAnimationFrame(loop)

            for(const item of this.items)
            {
                const offsetX = - this.mouse.x * 900 * item.amplitude
                const offsetY = - this.mouse.y * 900 * item.amplitude

                item.offsetX = (offsetX - item.offsetX) * 0.05
                item.offsetY = (offsetY - item.offsetY) * 0.05

                const roundedOffsetX = Math.round(item.offsetX * 100) / 100
                const roundedOffsetY = Math.round(item.offsetY * 100) / 100

                item.$element.style.transform = `translateX(${item.offsetX}px) translateY(${item.offsetY}px)`
            }
        }
        loop()
    }
}

