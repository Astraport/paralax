# Промпты изображений

Изображения созданы встроенным `image_gen`. Прозрачные вырезы создавались с соответствующим фоном как референсом освещения и перспективы. Финальные файлы в `assets/` сохранены в WebP.

## Пруд

### `pond-background.webp`

> Use case: photorealistic-natural. Asset type: full-bleed landscape background plate for a browser parallax diorama, 16:9 wide. A tranquil pond at sunset in the countryside: broad still water fills lower half with warm golden reflections, opposite bank across the center with dense old willow and birch trees and soft silhouettes of reeds, low tree line in distance, peach and lavender sky, setting sun slightly right of center near the horizon. Viewpoint low from the near shore looking across the pond. On the near shore a narrow strip of dark earth and grasses is visible along the bottom, providing a plausible ground plane for a dock and reeds added later. Cinematic natural photography, richly detailed but calm and atmospheric, gentle haze, believable scale and perspective. Crucial: clear open water in center foreground. NO dock, NO boat, NO fishing rod, NO people, no buildings, no text, no watermark.

### `pond-boat.webp`

> Use case: background-extraction. Asset type: transparent midground cutout for a pond parallax scene. Use the input pond photograph ONLY for sunset color, viewpoint and realistic photographic style. OUTPUT ONLY one small, weathered wooden rowboat floating low on water, three-quarter view, empty, with a pair of oars inside; understated dark green outer hull, warm edge light from setting sun at right. Entire boat visible, clear outline, subtle realistic reflection immediately beneath hull fading to transparency. No dock, no reeds, no fishing rod, no people. GENUINELY TRANSPARENT ALPHA background: no sky, no pond scene, no rectangular water patch, no text, no watermark.

### `pond-dock.webp`

> Use case: background-extraction. Asset type: transparent foreground cutout for a pond parallax scene. Use input pond photo ONLY as reference for realistic perspective and sunset lighting. OUTPUT ONLY a small rustic wooden fishing jetty / dock seen from shore, narrow planked deck beginning wide at the bottom foreground and receding toward a narrow far end in the water, with several dark wooden support posts visibly descending beneath it. A simple slender fishing rod is resting diagonally on the dock with its tip extending over the water; line is subtle. Eye-level viewpoint looking outward along the dock, warm sunset rim light from image right. The near end is clearly connected to a little earthy bank at the bottom edge, far posts visibly meet the pond water. Entire object is an isolated cutout with naturally feathered tiny contact shadows. GENUINELY TRANSPARENT ALPHA outside dock and rod. NO full pond background, NO opaque water patch, NO boat, NO reeds, NO people, no text, no watermark.

### `pond-reeds.webp`

> Use case: background-extraction. Asset type: transparent closest-foreground botanical cutout for a sunset pond parallax scene. Use reference pond photo ONLY for realistic photographic texture and warm sunset backlighting. OUTPUT ONLY one dense clump of tall pond reeds and cattails growing from a small dark muddy near-bank base, varied slender stems and seed heads, some bent leaves, detailed natural silhouette, entire stems and rooted base visible. Warm edge light from right. GENUINELY TRANSPARENT ALPHA background, no pond image, no sky, no dock, no boat, no people, no text, no watermark.

## Греческая деревня

### `greece-background.webp`

> Use case: photorealistic-natural. Asset type: full-bleed landscape background plate for a browser parallax diorama, 16:9 wide. A sunlit Greek coastal village seen from a gently sloping pedestrian lane looking toward the sea between whitewashed houses. White plaster buildings with weathered terracotta roof tiles on both sides, restrained cobalt blue doors and railing details, pale stone paving with clear perspective and natural ground plane. A bright blue sea is visible in the middle distance through a generous gap between houses, layered hazy mountains beyond, warm clear sky. Leave the near foreground of the lane open for separate transparent tree and fence layers. Realistic Mediterranean natural photography, tactile whitewashed walls, late afternoon sunlight from left, crisp soft shadows, quiet unpeopled atmosphere. NO large foreground trees, NO prominent fence in front, NO people, NO text, no watermark.

### `greece-olive.webp`

> Use case: background-extraction. Asset type: transparent middle foreground cutout for a Greek coastal village parallax scene. Use input Greek village photo ONLY for style, light and eye-level perspective. OUTPUT ONLY a mature Mediterranean olive tree with a gnarled silvery trunk and airy muted sage foliage, planted in a large aged terracotta planter that visibly meets the paving, full tree from foliage tips to pot base, warm late-afternoon sun from left, realistic photographic texture and soft contact shadow. The planter gives a clear grounded base. GENUINELY TRANSPARENT ALPHA background with no village, no buildings, no sea, no floor patch, no other tree, no people, no text, no watermark.

### `greece-orange.webp`

> Use case: background-extraction. Asset type: transparent foreground cutout for a Greek coastal village parallax scene. Use input Greek village photo ONLY for photographic realism, warm left-side sunlight and perspective. OUTPUT ONLY a small lush orange tree with dark green leaves and several visible ripe oranges in a large weathered terracotta planter, entire tree from canopy to planter base, clear grounded contact point and subtle shadow, natural Mediterranean proportions. GENUINELY TRANSPARENT ALPHA background; no village buildings, no sea, no floor patch, no other plants, no people, no text, no watermark.

### `greece-fence.webp`

> Use case: background-extraction. Asset type: transparent foreground architectural cutout for a Greek coastal village parallax scene. Use reference village photo ONLY for authentic Mediterranean materials, late afternoon left-side sun and perspective. OUTPUT ONLY a short segment of traditional cobalt-blue painted wrought-iron fence with simple vertical bars and a modest whitewashed low masonry base, running diagonally in perspective from larger near end at bottom right toward smaller far end at upper left. The base rests on stone paving with subtle contact shadow, no floating edges. Weathered paint, elegant simple geometry, full fence silhouette visible. GENUINELY TRANSPARENT ALPHA outside the fence. NO buildings, NO sea, NO large floor patch, no trees, no people, no text, no watermark.

## Комната СССР

### `room-background.webp`

> Use case: historical-scene. Asset type: wide background plate for a browser parallax diorama, landscape 16:9. An empty late-1970s Soviet apartment living room, straight-on eye-level view, hand-painted gouache illustration. Faded cream floral wallpaper, honey wood parquet floor, patterned wall carpet in muted burgundy and ochre at the back center, tall left window with lace curtain, late afternoon amber sunlight. Clear floor area for furniture to be added as separate transparent layers. Historically plausible. No furniture, no people, no text, no watermark.

### `room-cabinet.webp`

> Use case: background-extraction. Asset type: isolated transparent PNG furniture layer for the same Soviet living room parallax diorama. Use the input room image ONLY as reference for perspective, light direction, color and realism. OUTPUT ONLY a single 1970s Soviet walnut glass-front display cabinet / sideboard (сервант), about 1.8m tall, stocked with modest white porcelain dishes and a few books. Three-quarter frontal view compatible with the room's eye-level camera. Warm sunlight from image left. Historically plausible worn polished wood. Full furniture visible from top to feet, clean silhouette with natural soft contact shadow. GENUINELY TRANSPARENT BACKGROUND with alpha everywhere outside the cabinet; NO room wall, NO floor, NO carpet, NO other furniture, NO people, NO text. The output must be a cutout asset, not an image of the whole room.

### `room-armchair.webp`

> Use case: background-extraction. Asset type: transparent furniture cutout for a 1970s Soviet living room browser parallax scene. Use input room only as reference for realistic visual style, front-facing eye-level camera, warm sunlight from left, color and perspective. Primary request: one vintage low-backed upholstered Soviet armchair with carved dark wooden arms and tapered feet, worn moss-green fabric with subtle geometric woven texture, a folded beige throw casually draped over one arm. Three-quarter view, facing slightly toward center of room. Entire chair visible, clean edges, soft natural contact shadow. Constraints: output ONLY the armchair isolated on a genuinely TRANSPARENT ALPHA background. No wallpaper, no floor, no other furniture, no room, no people, no text, no watermark.

### `room-table.webp`

> Use case: background-extraction. Asset type: single transparent foreground furniture cutout for a wide browser parallax scene, landscape composition. The input Soviet room image is ONLY a reference for perspective, warm left-side lighting and photographic texture. Primary request: a 1970s Soviet living room coffee table made of polished dark wood, rectangular and low, in three-quarter view, with a simple amber glass flower vase holding a small bunch of dried branches on the tabletop. Two separate period-appropriate slender wooden dining chairs with muted tan upholstered seats sit at the table, one to each side, clearly visible. A small worn red-and-blue rubber child's ball lies on the floor beside the table leg. Cohesive grouping, full object silhouettes including legs and ball; natural soft contact shadows. Composition: wide, all objects fit comfortably within image; table in middle, chairs at left and right, ball near front right. Eye-level view compatible with reference room. No objects cut off. Constraints: output ONLY this furniture grouping on a genuinely TRANSPARENT alpha background. NO room background, wall, floor, carpet, window, people, writing, logos, watermark. Do not flatten transparency.

## Лунный портал

### `portal-background.webp`

> Use case: stylized-concept. Asset type: full-bleed wide background plate for an immersive browser parallax diorama, 16:9 landscape. A mysterious enchanted forest clearing at blue hour: a huge luminous moon low in a deep indigo sky behind distant jagged mountains, layered blue mist drifting through a valley, dark mossy forest floor and winding stone path visible in the lower third leading toward the center. Faint cyan reflections in the mist and tiny warm amber firefly glimmers. Rich cinematic fantasy concept art with hand-painted texture, strong atmospheric perspective, dramatic high contrast but refined, deep cobalt and midnight violet shadows, cold teal light, sparse golden sparks. Camera at human eye level looking forward; center must remain open and unobstructed for a separate glowing stone portal cutout. Distant trees may be tiny silhouettes, but NO large nearby trunks, NO portal, NO foreground plants, NO people, NO text, no watermark. Opaque background.

### `portal-far-trees.webp`

> Use case: background-extraction. Asset type: wide transparent middle-distance forest layer for an immersive fantasy parallax scene. Use input moonlit valley image ONLY for painterly cinematic style, indigo palette, cool moonlight and eye-level perspective. OUTPUT ONLY a loose horizontal band of dark blue pine-tree silhouettes with some visible slender trunks and low blue mist, taller clusters on the left and right and a broad OPEN GAP IN CENTER so the moon and central valley remain visible. Trees are distant medium-size, rooted in an uneven rocky forest-ground strip along the bottom of the cutout. Delicate luminous rim light on needles. Very wide 16:9 composition. GENUINELY TRANSPARENT ALPHA background; no moon, no sky, no mountains, no lake, no portal, no people, no text or watermark.

### `portal-arch.webp`

> Use case: background-extraction. Asset type: isolated transparent focal layer for a moonlit fantasy valley browser parallax scene. Use input image ONLY as reference for visual style, cool cobalt lighting, stone textures and human eye-level perspective. OUTPUT ONLY an ancient standing stone arch portal, tall and narrow, sculpted from cracked dark slate with moss at its base, luminous turquoise energy swirling in the opening and a soft cyan glow spilling onto a small patch of stone path at the foot. Entire arch visible from top to grounded base, clear contact shadow, no floating. An elegant mysterious silhouette; photorealistic painterly fantasy concept art. GENUINELY TRANSPARENT ALPHA outside the arch and its small localized glow. No large background, no moon, no mountains, no forest, no people, no text, no watermark.

### `portal-left-tree.webp`

> Use case: background-extraction. Asset type: very near left foreground framing layer for a moonlit fantasy forest parallax scene. Use input moonlit valley image ONLY for painterly cinematic style, moonlight and indigo color. OUTPUT ONLY one enormous ancient gnarled pine tree trunk with exposed roots at lower edge, rising along the LEFT SIDE of a wide landscape composition; branches and dark blue-green needles reach inward across the upper-left corner. The center and right two-thirds must be empty transparent space to preserve the view. Luminous cold moonlight catches the bark edges, a few tiny warm fireflies near roots. Full visible natural tree silhouette from roots to branches where cropped by frame. GENUINELY TRANSPARENT ALPHA background; no valley, no moon, no extra trees, no people, no text, no watermark.

### `portal-right-tree.webp`

> Use case: background-extraction. Asset type: very near RIGHT foreground framing layer for an immersive moonlit fantasy parallax scene. Use input moonlit valley ONLY as visual reference for painterly cinematic realism, cobalt shadows and silver-blue moonlight. OUTPUT ONLY a massive ancient twisted pine tree rooted in dark mossy rock at the LOWER RIGHT edge, thick bark trunk rising along the RIGHT SIDE and spreading branches and sparse blue-green needles across the upper-right corner. The left and center two-thirds are completely empty transparent space. Cool moonlight rims the bark; a few subtle gold fireflies near the base. Landscape composition. GENUINELY TRANSPARENT ALPHA outside tree, no valley, no moon, no portal, no extra trees, no people, no text, no watermark.

### `portal-foreground.webp`

> Use case: background-extraction. Asset type: closest foreground vegetation strip for a moonlit fantasy valley parallax scene. Use input background image ONLY for hand-painted cinematic style, midnight-blue rocks and cyan moonlight. OUTPUT ONLY an irregular low border of lush dark ferns, mossy stones and several small bioluminescent turquoise mushrooms along the VERY BOTTOM edge of a wide 16:9 landscape composition. The plants should be thicker in lower left and lower right corners and leave the central path mostly open. A few warm firefly pinpoints. Frond tips and individual plants cleanly separated. GENUINELY TRANSPARENT ALPHA above and between plants; no background landscape, no portal, no large tree trunks, no people, no text or watermark.

## Доработка греческой деревни

### `greece-sea-mountains.webp`

> Use case: precise-object-edit for a layered parallax diorama. Edit the provided Greek coastal village photograph into a clean FAR BACKGROUND PLATE. Preserve the camera viewpoint, horizon height, sky clouds, distant blue mountains, distant coastal headlands, sunlight direction, and the central sea exactly in their original positions and realistic photographic style. REMOVE the entire close whitewashed village architecture on BOTH left and right sides, all terracotta roofs, blue doors, balcony railings, stone-paved foreground lane and foreground planters. Fill the removed regions with a plausible continuous expanse of Mediterranean sea, distant coastal mountains and sky matching the central existing view, with gentle atmospheric perspective. The result must look like the same scene viewed without any nearby village buildings: only sea, sky, mountains and far coastline. No houses, no road, no railing, no trees near camera, no people, no text, no watermark. Opaque full-bleed 16:9 landscape image.

### `greece-buildings.webp`

> Use case: precise-background-extraction for layered parallax. From the provided Greek coastal village photograph, isolate the NEAR whitewashed buildings on the left and right plus their attached terracotta roofs, blue doors, balconies, stone walls, doorsteps and the stone-paved foreground lane across the bottom as one foreground architecture layer. Preserve the EXACT camera framing, perspective, original positions, proportions, textures and warm lighting of all these near structures. The broad CENTRAL GAP between the left and right buildings must be genuinely transparent alpha so an independently moving sea and mountains can show behind them. The sky, sea, mountains, distant island, and any distant houses must be removed completely to transparency. Keep building edges detailed and naturally antialiased; retain all building parts and paving. Full-size 16:9 transparent image aligned to the reference, NOT a rearranged collection, no people, no text, no watermark.

### `greece-clean-background.webp`

> Use case: precise-object-edit. Edit target: the provided Greek village photograph. Keep the camera, lighting, mountains, sea, sky, two large foreground white buildings on left and right, their roofs/doors/railings, and the stone-paved foreground lane unchanged. Remove ONLY the smaller distant cluster of white houses with terracotta roofs in the lower CENTRAL gap between the two foreground buildings, approximately middle-lower part of the image beyond the downhill lane. Reconstruct the area behind those houses as plausible uninterrupted blue sea and distant coastline, with the stone lane still ending naturally in the middle distance. The purpose is a clean background plate because the distant house cluster will be composited as a separate parallax layer. Do not add new buildings, trees, people, text or logos. Full opaque 16:9 landscape image.

### `greece-island-houses.webp`

> Use case: transparent mid-distance architecture cutout. Reference the provided clean Greek coastal village background ONLY for natural photographic realism, camera angle, and warm sunlight from upper left. Create a SMALL DISTANT cluster of 8-12 whitewashed Greek houses with terracotta tiled roofs, blue shutters, one thin cypress tree and a few flowering shrubs. The village sits on a low, irregular rocky coastal headland with visible pale stone shoreline and dark olive scrub beneath the houses so it has a believable natural base at the sea edge. View from slightly above as in the reference, with subdued atmospheric perspective; distant buildings must look small, compact, and cohesive. Complete isolated silhouette on genuinely transparent alpha background, including the uneven rocky base; no surrounding sea rectangle, no sky, no huge near buildings, no paved foreground, no text, no watermark.

## Разделённая мебель комнаты

За референс для следующих четырёх вырезов взята исходная группа `room-table.webp`.

### `room-table-solo.webp`

> Use case: precise-object-extraction. From the supplied Soviet living-room furniture cutout, isolate ONLY the dark polished 1970s Soviet wooden coffee table with its pale floral porcelain vase and white flowers. Show all four table legs complete to the floor, consistent perspective and warm afternoon light. Remove both chairs and the ball completely. Single complete furniture cutout on genuinely transparent alpha background, clean edges, no room, no floor patch, no text.

### `room-chair-left.webp`

> Use case: precise-object-extraction. From the supplied Soviet living-room furniture cutout, isolate ONLY the left upholstered wooden dining chair, seen at its original three-quarter angle. Reconstruct its complete seat and all legs if partly hidden by table, with matching reddish-brown wood, beige upholstery, perspective and warm afternoon light. Single chair only on genuinely transparent alpha background, clean edges, no table, vase, other chair, ball, room or floor patch, no text.

### `room-chair-right.webp`

> Use case: precise-object-extraction. From the supplied Soviet living-room furniture cutout, isolate ONLY the right upholstered wooden dining chair, seen at its original three-quarter angle, oriented inward toward the table. Reconstruct its complete seat and all legs if partly hidden by table, with matching reddish-brown wood, beige upholstery, perspective and warm afternoon light. Single chair only on genuinely transparent alpha background, clean edges, no table, vase, other chair, ball, room or floor patch, no text.

### `room-ball.webp`

> Use case: precise-object-extraction. From the supplied Soviet living-room furniture cutout, isolate ONLY the small red and blue rubber toy ball from the lower foreground. Spherical, original color sections, subtle realistic highlight, clean circular edge. Single small ball cutout on genuinely transparent alpha background. No table, chair, floor patch, room, text or watermark.

## Мезозойская долина

### `meso-background.webp`

> Use case: original-background. Create a breathtaking cinematic prehistoric Mesozoic valley as a 16:9 landscape background plate for a multi-layer parallax browser scene. View from a low rocky overlook down a winding jade-blue river through a vast lush fern jungle. Massive dark basalt cliffs on both sides frame the valley but leave the middle open. A distant smoking volcanic cone, layered jungle mountains, sun shafts through storm clouds, humid mist, dramatic amber sunset meeting cool teal shadows. Big sense of depth and scale, highly detailed painterly natural history concept art, believable natural light, rich greens, deep blue-green shadows, glowing orange atmospheric horizon. Keep the foreground mostly bare dark rocky ground for separately composited plants and animals. IMPORTANT no dinosaurs, no pterosaurs, no animals, no text, no logos, no people. Full-bleed opaque landscape.

### `meso-trex.webp`

> Use case: transparent foreground creature asset for the supplied cinematic Mesozoic valley background. Create a complete adult Tyrannosaurus rex in a dramatic three-quarter side view, facing LEFT, standing with BOTH FEET on the same ground plane, tail extending right, head raised with open jaws, anatomically plausible powerful body and tiny forearms. Dark olive and umber pebbled skin, golden sunset rim light from upper left, cool teal shadows matching the supplied scene. Fierce and majestic, natural history cinematic concept art, highly detailed, believable. Entire dinosaur fits inside frame with clear silhouette, no body parts cropped. Genuinely transparent alpha background, no landscape, no plants, no shadow rectangle, no text.

### `meso-sauropods.webp`

> Use case: transparent mid-distance creature asset for the supplied cinematic Mesozoic valley background. Create TWO long-necked sauropod dinosaurs, one adult and one smaller juvenile, walking together toward LEFT, complete bodies and feet visible. They are a far midground silhouettes in soft atmospheric amber haze, muted slate green and warm rim light matching the sunset. Natural history cinematic concept art, anatomically plausible, strong recognizable long-neck silhouettes, separated enough to read clearly. Genuinely transparent alpha background, no ground patch, no landscape, no text.

### `meso-pterosaurs.webp`

> Use case: transparent sky creature asset for the supplied cinematic Mesozoic valley background. Create a loose flock of FIVE pterosaurs at different apparent sizes and angles, including one large leading pterosaur seen from below with broad extended wings and long pointed beak. Dynamic soaring poses, no overlapping silhouettes, late sunset gold rim lights, smoky blue gray bodies, painterly photoreal natural history concept art. Genuinely transparent alpha background, no sky patch, no landscape, no text.

### `meso-ferns-left.webp`

> Use case: transparent near-foreground vegetation for the supplied cinematic Mesozoic valley background. Dense, dramatic cluster of prehistoric tree ferns, cycads, horsetails and giant deeply divided fern fronds growing from one visible rocky base. Irregular broad silhouette rising higher on LEFT and spreading right; vivid deep emerald and olive foliage, golden sunset tips, cool teal shadows, richly detailed cinematic concept art. Designed to frame the lower left edge of a landscape. Entire plants visible, genuinely transparent alpha background, no rectangular ground patch, no dinosaurs, no text.

### `meso-ferns-right.webp`

> Use case: transparent near-foreground vegetation for the supplied cinematic Mesozoic valley background. Dense, dramatic cluster of prehistoric fern fronds, broad cycad leaves and dark twisting conifer-like branch growing from one visible rocky base. Irregular broad silhouette rising higher on RIGHT and spreading left; vivid deep emerald and olive foliage, golden sunset tips, cool teal shadows, richly detailed cinematic concept art. Designed to frame the lower right edge of a landscape. Entire plants visible, genuinely transparent alpha background, no rectangular ground patch, no dinosaurs, no text.
