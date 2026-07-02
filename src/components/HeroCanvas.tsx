import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Materials
    const redWire = new THREE.MeshBasicMaterial({ color: 0xc8102e, wireframe: true, transparent: true, opacity: 0.55 })
    const redSolid = new THREE.MeshStandardMaterial({ color: 0xc8102e, transparent: true, opacity: 0.08, roughness: 0.3, metalness: 0.8 })
    const whiteDim = new THREE.MeshBasicMaterial({ color: 0xfefefe, wireframe: true, transparent: true, opacity: 0.07 })

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xc8102e, 3, 20)
    pointLight.position.set(3, 3, 5)
    scene.add(pointLight)

    // Floating shapes
    type ShapeObj = { mesh: THREE.Mesh; vx: number; vy: number; rx: number; ry: number; rz: number }
    const shapes: ShapeObj[] = []

    const addShape = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
      const solid = new THREE.Mesh(geo, redSolid.clone())
      const wire = new THREE.Mesh(geo, mat.clone())
      const group = new THREE.Group()
      group.add(solid, wire)
      group.position.set(x, y, z)
      scene.add(group)
      // Store as mesh for rotation tracking
      const proxy = { mesh: group as unknown as THREE.Mesh, vx: (Math.random() - 0.5) * 0.003, vy: (Math.random() - 0.5) * 0.003, rx: (Math.random() - 0.5) * 0.006, ry: (Math.random() - 0.5) * 0.006, rz: (Math.random() - 0.5) * 0.003 }
      shapes.push(proxy)
    }

    // Octahedra (diamonds)
    addShape(new THREE.OctahedronGeometry(0.6, 0), redWire, -4, 2, -1)
    addShape(new THREE.OctahedronGeometry(0.35, 0), redWire, 3.5, -1.5, 0)
    addShape(new THREE.OctahedronGeometry(0.8, 0), redWire, 4, 2.5, -2)
    addShape(new THREE.OctahedronGeometry(0.25, 0), redWire, -2, -2, 1)

    // Torus rings (art deco circles)
    addShape(new THREE.TorusGeometry(0.9, 0.03, 8, 48), whiteDim, -5, -1, -1)
    addShape(new THREE.TorusGeometry(0.5, 0.02, 8, 48), redWire, 5.5, 0.5, -0.5)
    addShape(new THREE.TorusGeometry(1.2, 0.025, 8, 64), whiteDim, 1, 3, -3)

    // Icosahedra (geometric spheres)
    addShape(new THREE.IcosahedronGeometry(0.45, 1), redWire, -3, 0.5, 0.5)
    addShape(new THREE.IcosahedronGeometry(0.3, 1), whiteDim, 2.5, 2.5, -1)

    // Tetrahedra
    addShape(new THREE.TetrahedronGeometry(0.5, 0), redWire, 0, -2.8, -0.5)
    addShape(new THREE.TetrahedronGeometry(0.35, 0), whiteDim, -4.5, 1.5, 0)

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // Resize
    const onResize = () => {
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    // Animate
    let raf: number
    const clock = new THREE.Clock()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      shapes.forEach((s, i) => {
        s.mesh.rotation.x += s.rx
        s.mesh.rotation.y += s.ry
        s.mesh.rotation.z += s.rz
        // Gentle float
        s.mesh.position.y += Math.sin(t * 0.4 + i * 1.3) * 0.0008
        s.mesh.position.x += Math.cos(t * 0.3 + i * 0.9) * 0.0005
      })

      // Parallax camera drift
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
