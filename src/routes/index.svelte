<script>
import init, { ream2csv } from 'ream';
console.log(1)
init().then(() => {
    const input = `
    # Data
    - key: value
    - k: v
    - one: 1
    - two: 2
    - three: 3

    ## Child
    - one: 1
    - two: 2

    ## Child
    - one: 3
    - two: 4
    `
    const result = ream2csv(input)
    console.log(result)
})
</script>


<div class="main">
    <div class="intro">
        Data language for building maintainble and reuable social science dataset
    </div>

    <div class="index-button">
        <a href="">Why REAM</a>
        <a href="">Get Started</a>
    </div>

    <div class="box note">
        <div class="box-title">Note</div>
        <p>
            The project is under active development and is not production ready.
            Youa re free to play around with the language and tools, but note that backward compatibility is not guaranteed.
            If you are interested in using REAM for serious projects, please 
            <a href="mailto:louis@chihminglee.com">contact me</a>
        </p>
    </div>

    <div>
    </div>
</div>
