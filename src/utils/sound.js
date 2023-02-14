const getSound = async (context, name)=> {  
  const response = await fetch(`/sounds/${name}.mp3`)
  const arrayBuffer = await response.arrayBuffer()
  return context.decodeAudioData(arrayBuffer)
}

export const playSound = async (name)=> {
  const context = new AudioContext()
  const source = context.createBufferSource()
  source.buffer = await getSound(context, name)
  source.connect(context.destination)
  source.start()
}