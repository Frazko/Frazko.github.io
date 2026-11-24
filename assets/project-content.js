// Portfolio copy is kept separate from the interface. Every visitor-facing string
// has an explicit Spanish and English version, including planned features.
const text = (es, en) => ({ es, en });
const feature = (icon, es, en, descriptionEs, descriptionEn, planned = false) => ({
  icon, title: text(es, en), description: text(descriptionEs, descriptionEn), planned,
});
const branch = (icon, es, en, items) => ({ icon, title: text(es, en), items });
const tech = (name, es, en) => ({ name, description: text(es, en) });

export const ui = {
  close: text('Cerrar detalles', 'Close details'),
  technical: text('Cómo está construida', 'How it is built'),
  map: text('Dentro de {app}', 'Inside {app}'),
  mapHint: text('Toca una rama para descubrir sus funciones.', 'Select a branch to explore its features.'),
  areas: text('Áreas de la aplicación', 'Application areas'),
  technologies: text('Tecnologías y su función', 'Technologies and their role'),
  planned: text('En desarrollo', 'In development'),
  stores: text('Encuentra la app', 'Get the app'),
  website: text('Explora la web', 'Explore the website'),
  language: text('Idioma', 'Language'),
};

export const projects = {
  'convoy': {
    icon: 'mountain', accent: '#dfaf6d', subtitle: 'OFFROAD',
    headline: text('Tu próxima aventura empieza con tu gente.', 'Your next adventure starts with your people.'),
    story: [
      text('Organiza la salida, descubre nuevas rutas y disfruta el camino con tu grupo. Convoy reúne los puntos de encuentro, los recorridos GPS y las conversaciones que convierten una idea en una aventura compartida.', 'Plan the trip, discover new trails and enjoy the journey with your group. Convoy brings together meeting points, GPS routes and the conversations that turn an idea into a shared adventure.'),
      text('Antes de salir, prepara el evento. En ruta, coordínate con quienes comparten su ubicación. Al volver, reúne las fotos y los recuerdos para que la aventura siga viva.', 'Before you leave, set up the event. On the trail, coordinate with people sharing their location. Back home, bring the photos and memories together to keep the adventure alive.'),
    ],
    technical: text('Aplicación Flutter organizada por funcionalidades, con capas de presentación, dominio y datos. Riverpod coordina el estado y los repositorios conectan con Supabase para autenticación, contenido, archivos y actualizaciones en tiempo real. Los mapas, el GPS y la importación GPX apoyan los recorridos; la caché conserva datos y mapas descargados para consultas sin conexión.', 'A Flutter application organized by feature, with presentation, domain and data layers. Riverpod coordinates state, while repositories connect to Supabase for authentication, content, files and realtime updates. Maps, GPS and GPX imports support trail exploration; caching retains downloaded maps and data for offline access.'),
    branches: [
      branch('compass', 'Explorar', 'Explore', [
        feature('home', 'Inicio', 'Home', 'Novedades y actividad de tus grupos.', 'Updates and activity from your groups.'),
        feature('map', 'Rutas', 'Routes', 'Descubre recorridos, importa GPX y consulta mapas.', 'Discover trails, import GPX files and browse maps.'),
        feature('store', 'Negocios', 'Businesses', 'Encuentra servicios y guarda tus favoritos.', 'Find services and save your favorites.'),
      ]),
      branch('calendar', 'Organizar', 'Organize', [
        feature('calendar', 'Eventos', 'Events', 'Prepara la fecha, la ruta y el punto de encuentro.', 'Set the date, route and meeting point.'),
        feature('user-plus', 'Invitaciones', 'Invitations', 'Invita participantes y gestiona las solicitudes.', 'Invite participants and manage requests.'),
        feature('users', 'Grupos', 'Groups', 'Crea tu grupo y administra sus integrantes.', 'Create your group and manage its members.'),
      ]),
      branch('route', 'En ruta', 'On the trail', [
        feature('car', 'Convoy activo', 'Active convoy', 'Reúne a los participantes de la salida.', 'Bring the trip participants together.'),
        feature('pin', 'Ubicación compartida', 'Shared location', 'Consulta las posiciones de quienes deciden compartirlas.', 'See the locations of people who choose to share them.'),
        feature('chat', 'Coordinación', 'Coordination', 'Conversa con el grupo y comparte puntos en el mapa.', 'Chat with the group and share points on the map.'),
      ]),
      branch('camera', 'Compartir', 'Share', [
        feature('users', 'Comunidad', 'Community', 'Conecta con otros aficionados y sigue sus publicaciones.', 'Connect with fellow enthusiasts and follow their posts.'),
        feature('images', 'Galería', 'Gallery', 'Comparte fotos y reúne los recuerdos de cada salida.', 'Share photos and collect memories from every trip.'),
        feature('chat', 'Conversaciones', 'Conversations', 'Comenta las aventuras y mantén el contacto con tu grupo.', 'Talk about your adventures and stay in touch with your group.'),
      ]),
      branch('user', 'Mi espacio', 'My space', [
        feature('car', 'Garage', 'Garage', 'Registra tus vehículos y sus características.', 'Add your vehicles and their specifications.'),
        feature('user', 'Perfil', 'Profile', 'Personaliza tu información.', 'Personalize your information.'),
        feature('settings', 'Configuración', 'Settings', 'Elige el idioma y ajusta privacidad y notificaciones.', 'Choose your language and adjust privacy and notifications.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart', 'Interfaz y lógica compartidas entre iOS y Android.', 'Shared interface and application logic for iOS and Android.'),
      tech('Riverpod + GoRouter', 'Gestión del estado, dependencias y navegación entre funcionalidades.', 'State, dependency management and navigation between features.'),
      tech('Supabase + PostgreSQL', 'Autenticación, datos, permisos, archivos y suscripciones a cambios en tiempo real.', 'Authentication, data, permissions, files and realtime change subscriptions.'),
      tech('flutter_map + Geolocator + GPX', 'Visualización de mapas, ubicación del dispositivo e intercambio de recorridos GPS.', 'Map rendering, device location and GPS route exchange.'),
      tech(text('Hive + caché de mapas', 'Hive + map cache'), 'Persistencia local y almacenamiento de mapas descargados; la disponibilidad sin conexión depende de los datos guardados.', 'Local persistence and downloaded map storage; offline availability depends on saved data.'),
      tech('Firebase Messaging', 'Integración de notificaciones push para mantener al usuario al tanto de la actividad.', 'Push notification integration to keep users informed about activity.'),
    ],
  },
  'swapper-club': {
    icon: 'cards', accent: '#c8a4ff',
    headline: text('Cada sticker te acerca a completar la historia.', 'Every sticker brings you closer to the full story.'),
    story: [
      text('Transforma la emoción de coleccionar en una experiencia compartida. Organiza tus álbumes, identifica lo que te falta y descubre nuevas oportunidades de intercambio con otros coleccionistas.', 'Turn the joy of collecting into a shared experience. Organize your albums, see what is missing and discover new trading opportunities with other collectors.'),
      text('Tus repetidos pueden ser la pieza que alguien está buscando. Swapper Club conecta colección, intercambios y comunidad para que cada álbum avance contigo.', 'Your duplicates could be exactly what someone else is looking for. Swapper Club connects collections, trades and community to help every album move forward.'),
    ],
    technical: text('Aplicación Expo y React Native escrita en TypeScript y organizada en módulos de colección, álbumes, intercambios y comunidad. Zustand mantiene el estado de la interfaz; Supabase centraliza usuarios y datos compartidos. SQLite aporta almacenamiento local y los formularios usan validación tipada.', 'An Expo and React Native application written in TypeScript, organized into collection, album, trading and community modules. Zustand manages interface state; Supabase centralizes users and shared data. SQLite provides local storage and forms use typed validation.'),
    branches: [
      branch('book', 'Coleccionar', 'Collect', [
        feature('book', 'Álbumes', 'Albums', 'Explora álbumes y organiza las colecciones que sigues.', 'Explore albums and organize the collections you follow.'),
        feature('check', 'Mi colección', 'My collection', 'Lleva el control de los stickers que tienes y los que faltan.', 'Track the stickers you own and the ones you still need.'),
        feature('cards', 'Repetidos', 'Duplicates', 'Identifica las piezas que puedes ofrecer en un intercambio.', 'Identify the pieces you can offer in a trade.'),
      ]),
      branch('swap', 'Intercambiar', 'Trade', [
        feature('compass', 'Coincidencias', 'Matches', 'Encuentra oportunidades a partir de las colecciones.', 'Find opportunities based on collections.'),
        feature('swap', 'Propuestas', 'Proposals', 'Organiza las piezas que ofreces y las que buscas.', 'Organize what you offer and what you are looking for.'),
        feature('chat', 'Chat del intercambio', 'Trade chat', 'Coordina los detalles con la otra persona.', 'Coordinate the details with the other person.'),
      ]),
      branch('users', 'Comunidad', 'Community', [
        feature('images', 'Publicaciones', 'Posts', 'Comparte contenido con otros coleccionistas.', 'Share content with fellow collectors.'),
        feature('chat', 'Conversaciones', 'Conversations', 'Mantén el contacto más allá de un intercambio.', 'Stay in touch beyond a single trade.'),
        feature('award', 'Rankings', 'Rankings', 'Consulta la actividad destacada de la comunidad.', 'Explore community activity rankings.'),
      ]),
      branch('heart', 'Descubrir', 'Discover', [
        feature('cards', 'Stickers', 'Stickers', 'Consulta las piezas de cada colección.', 'Browse the pieces in each collection.'),
        feature('heart', 'Favoritos', 'Favorites', 'Guarda contenido para volver a encontrarlo.', 'Save content to find it again later.'),
      ]),
      branch('user', 'Mi espacio', 'My space', [
        feature('user', 'Perfil', 'Profile', 'Presenta tu identidad como coleccionista.', 'Show your identity as a collector.'),
        feature('settings', 'Preferencias', 'Preferences', 'Ajusta idioma y opciones de la cuenta.', 'Adjust your language and account options.'),
        feature('shield', 'Reportes', 'Reports', 'Envía comentarios y reporta contenido a moderación.', 'Send feedback and report content to moderators.'),
      ]),
    ],
    technologies: [
      tech('Expo + React Native', 'Experiencia móvil compartida y acceso a servicios nativos del dispositivo.', 'Shared mobile experience with access to native device services.'),
      tech('TypeScript + Zod', 'Modelos tipados y validación de los datos introducidos en formularios.', 'Typed models and validation of form input.'),
      tech('Expo Router + Zustand', 'Navegación por pantallas y estado de las funcionalidades.', 'Screen navigation and feature state management.'),
      tech('Supabase + SQLite', 'Servicios de cuenta y datos compartidos, junto con persistencia local.', 'Account services and shared data, alongside local persistence.'),
      tech('RevenueCat + AdMob', 'Integraciones de suscripciones y anuncios en la experiencia móvil.', 'Subscription and advertising integrations in the mobile experience.'),
    ],
  },
  'aquiando': {
    icon: 'pin', accent: '#79d9cb',
    headline: text('Menos «¿dónde estás?». Más conexión con tu gente.', 'Less “where are you?” More connection with your people.'),
    story: [
      text('Un punto de encuentro para los pequeños recorridos de cada día. Aquiando reúne grupos, lugares y ubicación compartida para ayudarte a coordinarte con las personas que eliges.', 'A meeting point for everyday journeys. Aquiando brings groups, places and shared location together to help you coordinate with the people you choose.'),
      text('Consulta el mapa, organiza tus lugares habituales y sigue el contexto de los viajes desde una misma experiencia. Un producto en desarrollo centrado en compartir con intención y mantener el control de tus preferencias.', 'Check the map, organize familiar places and follow trip context in one experience. A product in development focused on intentional sharing and control over your preferences.'),
    ],
    technical: text('Cliente Expo y React Native con lógica separada por dominios: grupos, ubicación, lugares, geocercas y viajes. Los servicios de ubicación en segundo plano aplican criterios de movimiento y actualizaciones periódicas. Una cola local permite reintentar envíos a Supabase cuando vuelve la conectividad.', 'An Expo and React Native client with domain-specific logic for groups, location, places, geofences and trips. Background location services use movement criteria and periodic updates. A local queue retries uploads to Supabase when connectivity returns.'),
    branches: [
      branch('users', 'Mi grupo', 'My group', [
        feature('users', 'Integrantes', 'Members', 'Reúne a las personas con quienes compartes ubicación.', 'Bring together the people you share location with.'),
        feature('user-plus', 'Solicitudes', 'Requests', 'Gestiona quién se une a cada grupo.', 'Manage who joins each group.'),
      ]),
      branch('map', 'En el mapa', 'On the map', [
        feature('pin', 'Ubicaciones', 'Locations', 'Consulta las posiciones compartidas por los integrantes.', 'View locations shared by group members.'),
        feature('activity', 'Estado reciente', 'Recent status', 'Consulta el contexto y las actualizaciones del grupo.', 'Check group context and recent updates.'),
      ]),
      branch('home', 'Lugares', 'Places', [
        feature('home', 'Sitios habituales', 'Familiar places', 'Organiza los lugares importantes para tu grupo.', 'Organize places that matter to your group.'),
        feature('bell', 'Entradas y salidas', 'Arrivals and departures', 'Configura avisos asociados a zonas definidas.', 'Configure alerts associated with defined areas.'),
      ]),
      branch('route', 'Recorridos', 'Journeys', [
        feature('route', 'Viajes', 'Trips', 'Consulta información de los desplazamientos.', 'View information about journeys.'),
        feature('history', 'Historial', 'History', 'Revisa la actividad y las ubicaciones registradas.', 'Review recorded activity and locations.'),
      ]),
      branch('settings', 'Mi control', 'My controls', [
        feature('shield', 'Permisos', 'Permissions', 'Gestiona el acceso a la ubicación desde el dispositivo.', 'Manage device location permissions.'),
        feature('bell', 'Notificaciones', 'Notifications', 'Ajusta las alertas que quieres recibir.', 'Adjust the alerts you want to receive.'),
        feature('user', 'Cuenta', 'Account', 'Configura tu perfil y preferencias.', 'Set up your profile and preferences.'),
      ]),
    ],
    technologies: [
      tech('Expo + React Native + TypeScript', 'Interfaz móvil y lógica de dominio tipada.', 'Mobile interface and typed domain logic.'),
      tech('Expo Location + TaskManager', 'Obtención de ubicación y ejecución de tareas de seguimiento en segundo plano, según permisos del sistema.', 'Location access and background tracking tasks, subject to system permissions.'),
      tech('React Native Maps', 'Visualización de integrantes, posiciones y lugares sobre el mapa.', 'Map display for members, positions and places.'),
      tech('Supabase + SQLite', 'Datos compartidos, almacenamiento local y cola de sincronización.', 'Shared data, local storage and synchronization queue.'),
      tech('Expo Notifications + i18next', 'Notificaciones y textos localizados en español e inglés.', 'Notifications and localized Spanish and English copy.'),
    ],
  },
  'viberroom': {
    icon: 'chat', accent: '#b8a6ff',
    headline: text('Cada conversación tiene su propia vibra.', 'Every conversation has its own vibe.'),
    story: [
      text('Hay conversaciones que merecen un espacio propio. ViberRoom explora una mensajería más personal, con salas, fondos y detalles visuales que expresan la identidad de cada conexión.', 'Some conversations deserve a space of their own. ViberRoom explores more personal messaging, with rooms, backgrounds and visual details that express the identity of each connection.'),
      text('Un prototipo que combina comunicación y personalización: el lugar donde lo que dices y cómo se siente la conversación forman parte de la misma experiencia.', 'A prototype combining communication and personalization: a place where what you say and how the conversation feels are part of the same experience.'),
    ],
    technical: text('Proyecto Flutter modular con Riverpod y Supabase. La capa de tiempo real utiliza canales privados y presencia, mientras los módulos visuales separan fondos, burbujas y marcos. La integración WebRTC está prevista para llamadas; el servicio de llamadas todavía tiene operaciones sin implementar.', 'A modular Flutter project using Riverpod and Supabase. The realtime layer uses private channels and presence, while visual modules separate backgrounds, bubbles and frames. WebRTC is intended for calls; the call service still has unimplemented operations.'),
    branches: [
      branch('chat', 'Conversar', 'Chat', [
        feature('chat', 'Conversaciones', 'Conversations', 'Organiza los espacios donde mantienes el contacto.', 'Organize the spaces where you stay in touch.'),
        feature('users', 'Contactos', 'Contacts', 'Gestiona las personas con quienes conversas.', 'Manage the people you talk to.'),
        feature('heart', 'Reacciones', 'Reactions', 'Expresa una respuesta con detalles visuales.', 'Express a response with visual details.'),
      ]),
      branch('palette', 'Personalizar', 'Personalize', [
        feature('images', 'Fondos', 'Backgrounds', 'Da una atmósfera propia a cada espacio.', 'Give each space its own atmosphere.'),
        feature('chat', 'Burbujas', 'Bubbles', 'Explora estilos para presentar tus mensajes.', 'Explore styles for presenting messages.'),
        feature('square', 'Marcos', 'Frames', 'Añade identidad visual a la experiencia.', 'Add visual identity to the experience.'),
      ]),
      branch('camera', 'Expresarse', 'Express', [
        feature('cards', 'Stickers', 'Stickers', 'Complementa tus conversaciones con expresiones visuales.', 'Add visual expression to your conversations.'),
        feature('camera', 'Momentos', 'Moments', 'Explora recuerdos vinculados a las conversaciones.', 'Explore memories connected to conversations.'),
      ]),
      branch('phone', 'Conectar', 'Connect', [
        feature('phone', 'Llamadas', 'Calls', 'Integración de voz y video prevista con WebRTC.', 'Voice and video integration planned with WebRTC.', true),
        feature('activity', 'Presencia', 'Presence', 'Base de tiempo real para la actividad en los canales.', 'Realtime foundation for channel activity.'),
      ]),
      branch('user', 'Mi espacio', 'My space', [
        feature('user', 'Perfil', 'Profile', 'Configura tu identidad en la aplicación.', 'Set up your identity in the application.'),
        feature('bell', 'Avisos', 'Notifications', 'Gestiona las notificaciones de la experiencia.', 'Manage notifications for the experience.'),
        feature('shield', 'Moderación', 'Moderation', 'Herramientas para gestionar reportes de contenido.', 'Tools for managing content reports.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart', 'Interfaz móvil con componentes personalizables.', 'Mobile interface with customizable components.'),
      tech('Riverpod + GoRouter', 'Estado de las funcionalidades y navegación.', 'Feature state and navigation.'),
      tech('Supabase', 'Autenticación, almacenamiento y canales privados con presencia en tiempo real.', 'Authentication, storage and private channels with realtime presence.'),
      tech('WebRTC', 'Dependencia prevista para comunicación de voz y video; las llamadas siguen en desarrollo.', 'Dependency intended for voice and video communication; calls remain in development.'),
      tech('Firebase + RevenueCat', 'Integraciones de notificaciones, diagnóstico y suscripciones dentro del prototipo.', 'Notification, diagnostics and subscription integrations within the prototype.'),
    ],
  },
  'seeya': {
    icon: 'users', accent: '#ffadac',
    headline: text('Que «tenemos que vernos» se convierta en un plan.', 'Turn “we should meet up” into a plan.'),
    story: [
      text('Tu gente, sus lugares favoritos y una razón para encontrarse. SeeYa nace para acercar a los amigos fuera del chat, con círculos privados y espacios compartidos alrededor de la vida real.', 'Your people, their favorite places and a reason to meet. SeeYa is being built to bring friends together beyond the chat, with private circles and shared spaces centered on real life.'),
      text('La base de círculos, amistades y lugares ya está en desarrollo. La experiencia seguirá creciendo hacia planes, disponibilidad y recuerdos de esos momentos que vale la pena repetir.', 'The foundation for circles, friendships and places is already in development. The experience will grow toward plans, availability and memories of moments worth repeating.'),
    ],
    technical: text('Aplicación Flutter conectada a Supabase, con módulos de autenticación, círculos, amistades y lugares. Los permisos distinguen propietarios y administradores. La navegación usa GoRouter y el estado se gestiona con Riverpod. La planificación, las votaciones y los recuerdos forman parte de la evolución prevista.', 'A Flutter application connected to Supabase, with authentication, circle, friendship and place modules. Permissions distinguish owners and administrators. GoRouter handles navigation and Riverpod manages state. Planning, voting and memories are part of the intended evolution.'),
    branches: [
      branch('users', 'Círculos', 'Circles', [
        feature('users', 'Tus grupos', 'Your groups', 'Crea círculos privados y organiza sus integrantes.', 'Create private circles and organize their members.'),
        feature('user-plus', 'Invitaciones', 'Invitations', 'Comparte el acceso con las personas que eliges.', 'Share access with the people you choose.'),
        feature('shield', 'Roles', 'Roles', 'Gestiona permisos de propietarios y administradores.', 'Manage owner and administrator permissions.'),
      ]),
      branch('heart', 'Amistades', 'Friends', [
        feature('user-plus', 'Conectar', 'Connect', 'Envía y gestiona solicitudes de amistad.', 'Send and manage friend requests.'),
        feature('shield', 'Tu control', 'Your control', 'Gestiona tus conexiones y bloqueos.', 'Manage your connections and blocks.'),
      ]),
      branch('pin', 'Lugares', 'Places', [
        feature('pin', 'Sitios del círculo', 'Circle places', 'Reúne lugares compartidos dentro de cada grupo.', 'Bring shared places together within each group.'),
        feature('map', 'Dónde verse', 'Where to meet', 'Consulta la información de los lugares guardados.', 'Check the details of saved places.'),
      ]),
      branch('calendar', 'Planes', 'Plans', [
        feature('calendar', 'Disponibilidad', 'Availability', 'Encuentra momentos que encajen con tu gente.', 'Find times that work for your people.', true),
        feature('check', 'Decidir juntos', 'Decide together', 'Propón opciones y reúne las preferencias del grupo.', 'Propose options and gather group preferences.', true),
        feature('camera', 'Recuerdos', 'Memories', 'Conserva los momentos después del encuentro.', 'Keep the moments after getting together.', true),
      ]),
      branch('user', 'Mi espacio', 'My space', [
        feature('user', 'Perfil', 'Profile', 'Personaliza la información que compartes.', 'Personalize the information you share.'),
        feature('shield', 'Acceso', 'Sign-in', 'Accede a tu cuenta con verificación por correo.', 'Access your account with email verification.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart + shadcn_ui', 'Interfaz móvil y componentes visuales para círculos, perfiles y lugares.', 'Mobile interface and visual components for circles, profiles and places.'),
      tech('Riverpod + GoRouter', 'Estado compartido y rutas de navegación.', 'Shared state and navigation routes.'),
      tech('Supabase', 'Autenticación, base de datos y permisos para los espacios compartidos.', 'Authentication, database and permissions for shared spaces.'),
      tech('Freezed', 'Modelos de datos inmutables y estados explícitos.', 'Immutable data models and explicit states.'),
      tech('App Links + Share Plus', 'Enlaces de invitación y acciones para compartir desde el dispositivo.', 'Invitation links and device sharing actions.'),
    ],
  },
  'rewind': {
    icon: 'play', accent: '#75dfcc',
    headline: text('Un momento. Todas las formas de volver a vivirlo.', 'One moment. Every way to relive it.'),
    story: [
      text('Las mejores historias rara vez caben en un solo video. REWIND reúne los recuerdos de tu grupo para que una salida, un viaje o una celebración se disfruten desde distintas perspectivas.', 'The best stories rarely fit into one video. REWIND brings your group’s memories together so a trip, an outing or a celebration can be enjoyed from different perspectives.'),
      text('Dale a esos videos un lugar al que volver: organiza tu grupo, comparte contenido y redescubre lo que cada persona vio de la misma experiencia.', 'Give those videos a place to come back to: organize your group, share content and rediscover what each person saw in the same experience.'),
    ],
    technical: text('Aplicación Flutter con Supabase para cuentas, grupos y permisos. Integra reproducción de video y contenido de YouTube. Servicios Node.js separados gestionan inspección de archivos, miniaturas y publicación mediante conexiones autorizadas a YouTube. El producto se centra en organizar y compartir contenido, sin herramientas de edición de video en el alcance actual.', 'A Flutter application using Supabase for accounts, groups and permissions. It integrates video playback and YouTube content. Separate Node.js services handle media inspection, thumbnails and publishing through authorized YouTube connections. The current product focuses on organizing and sharing content, without video editing tools.'),
    branches: [
      branch('users', 'Tu grupo', 'Your group', [
        feature('users', 'Grupos', 'Groups', 'Reúne a las personas que comparten la experiencia.', 'Bring together the people who share the experience.'),
        feature('shield', 'Integrantes y roles', 'Members and roles', 'Organiza el acceso y las responsabilidades del grupo.', 'Organize group access and responsibilities.'),
      ]),
      branch('play', 'Revivir', 'Relive', [
        feature('play', 'Videos', 'Videos', 'Reproduce los recuerdos compartidos.', 'Play shared memories.'),
        feature('images', 'Perspectivas', 'Perspectives', 'Explora el contenido aportado por otras personas.', 'Explore content contributed by other people.'),
      ]),
      branch('camera', 'Compartir', 'Share', [
        feature('camera', 'Tus archivos', 'Your files', 'Aporta videos para reunirlos con los del grupo.', 'Contribute videos to bring them together with the group’s.'),
        feature('play', 'YouTube', 'YouTube', 'Conecta contenido y canales autorizados.', 'Connect content and authorized channels.'),
      ]),
      branch('book', 'Organizar', 'Organize', [
        feature('book', 'Listas', 'Playlists', 'Agrupa contenido para volver a encontrarlo.', 'Group content to find it again.'),
        feature('palette', 'Identidad', 'Identity', 'Personaliza el estilo de los espacios del grupo.', 'Personalize the style of group spaces.'),
      ]),
      branch('user', 'Mi espacio', 'My space', [
        feature('user', 'Cuenta', 'Account', 'Gestiona tu identidad y preferencias.', 'Manage your identity and preferences.'),
        feature('shield', 'Visibilidad', 'Visibility', 'Administra el acceso al contenido de los grupos.', 'Manage access to group content.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart + shadcn_ui', 'Interfaz compartida y componentes de navegación y contenido.', 'Shared interface and navigation and content components.'),
      tech('Supabase', 'Cuentas, relaciones entre grupos, permisos y almacenamiento de archivos.', 'Accounts, group relationships, permissions and file storage.'),
      tech('video_player + YouTube Player', 'Reproducción de archivos de video y contenido integrado de YouTube.', 'Playback of video files and embedded YouTube content.'),
      tech('Node.js', 'Procesos separados para inspección de medios, miniaturas y publicación.', 'Separate processes for media inspection, thumbnails and publishing.'),
      tech('YouTube API + OAuth', 'Conexiones autorizadas a canales, listas y flujos de publicación.', 'Authorized connections to channels, playlists and publishing workflows.'),
    ],
  },
  'cines-cr': {
    icon: 'film', accent: '#edb27d',
    headline: text('La próxima gran historia empieza eligiendo la función.', 'Your next great story starts with choosing a showtime.'),
    story: [
      text('Menos tiempo saltando entre carteleras y más tiempo disfrutando el cine. Cines CR reúne películas, salas y horarios de Costa Rica para ayudarte a encontrar la salida que encaja contigo.', 'Less time jumping between cinema listings and more time enjoying the movies. Cines CR brings films, theaters and showtimes across Costa Rica together to help you find an outing that fits.'),
      text('Explora qué hay en cartelera, descubre los detalles de una película y compara sus funciones desde la web.', 'Explore what is showing, discover movie details and compare showtimes on the website.'),
    ],
    technical: text('Plataforma de agregación con recolectores independientes por fuente, normalización y deduplicación de horarios. PostgreSQL almacena el catálogo y TMDB enriquece las películas. NestJS ofrece una API de lectura y Next.js presenta la experiencia web. El cliente Flutter corresponde a una fase futura.', 'An aggregation platform with independent source collectors, showtime normalization and deduplication. PostgreSQL stores the catalog and TMDB enriches movie information. NestJS provides a read API and Next.js presents the web experience. A Flutter client belongs to a future phase.'),
    branches: [
      branch('film', 'Cartelera', 'Now showing', [
        feature('film', 'Películas', 'Movies', 'Explora los títulos disponibles en la cartelera reunida.', 'Explore titles available in the aggregated listings.'),
        feature('compass', 'Descubrir', 'Discover', 'Encuentra opciones para tu próxima salida.', 'Find options for your next outing.'),
      ]),
      branch('book', 'La película', 'Movie details', [
        feature('book', 'Sinopsis', 'Synopsis', 'Conoce de qué trata cada historia.', 'Find out what each story is about.'),
        feature('images', 'Información', 'Information', 'Consulta afiches y datos del catálogo enriquecido.', 'Browse posters and enriched catalog information.'),
      ]),
      branch('store', 'Cines', 'Theaters', [
        feature('store', 'Salas y cadenas', 'Theaters and chains', 'Consulta la oferta de los cines incluidos.', 'Browse the options from included theaters.'),
        feature('pin', 'Por cine', 'By theater', 'Ubica las películas y funciones de cada sala.', 'Find movies and showtimes at each theater.'),
      ]),
      branch('calendar', 'Horarios', 'Showtimes', [
        feature('calendar', 'Funciones', 'Screenings', 'Revisa las fechas y horas de proyección.', 'Check screening dates and times.'),
        feature('filter', 'Filtros', 'Filters', 'Acota la cartelera según lo que quieres consultar.', 'Narrow down listings to what you want to see.'),
      ]),
      branch('layers', 'El catálogo', 'The catalog', [
        feature('layers', 'En un lugar', 'In one place', 'Consulta información reunida de distintas fuentes.', 'Browse information gathered from different sources.'),
        feature('activity', 'Actualización', 'Updates', 'La plataforma procesa horarios y evita registros duplicados.', 'The platform processes showtimes and removes duplicate records.'),
      ]),
    ],
    technologies: [
      tech('Next.js + TypeScript', 'Experiencia web y modelos tipados para consultar la cartelera.', 'Web experience and typed models for browsing listings.'),
      tech('NestJS', 'API de lectura que expone películas, cines y horarios normalizados.', 'Read API exposing normalized movies, theaters and showtimes.'),
      tech('PostgreSQL + Supabase', 'Persistencia del catálogo y de las funciones recogidas.', 'Storage for the catalog and collected showtimes.'),
      tech('Collectors HTML / JSON', 'Adaptadores por fuente que extraen y normalizan información.', 'Source-specific adapters that extract and normalize information.'),
      tech('TMDB', 'Enriquecimiento de películas con metadatos e imágenes.', 'Movie enrichment with metadata and images.'),
    ],
  },
  'week-planner': {
    icon: 'calendar', accent: '#c1d4ac',
    headline: text('Una semana con espacio para lo que importa.', 'A week with room for what matters.'),
    story: [
      text('No se trata solo de llenar el calendario. Week Planner propone un espacio para organizar actividades, dar continuidad a tus hábitos y entender cómo se sienten tus días.', 'Planning is more than filling a calendar. Week Planner offers a space to organize activities, give your habits continuity and understand how your days feel.'),
      text('Un prototipo para mirar la semana con perspectiva: preparar lo que viene, reflexionar sobre lo vivido y encontrar un ritmo más equilibrado.', 'A prototype for seeing the week in perspective: prepare for what is coming, reflect on what happened and find a more balanced rhythm.'),
    ],
    technical: text('Prototipo Flutter con separación entre presentación, aplicación, dominio y adaptadores. El repositorio local guarda el estado de planificación. La infraestructura Supabase de desarrollo aporta autenticación y API; las transferencias entre estados requieren confirmación y contemplan revisiones y conflictos. La sincronización automática y la asistencia de IA no forman parte del alcance actual.', 'A Flutter prototype separating presentation, application, domain and adapters. A local repository stores planning state. The development Supabase infrastructure provides authentication and an API; state transfers require confirmation and account for revisions and conflicts. Automatic synchronization and AI assistance are outside the current scope.'),
    branches: [
      branch('calendar', 'La semana', 'The week', [
        feature('calendar', 'Vista semanal', 'Weekly view', 'Organiza las actividades de los próximos días.', 'Organize activities for the coming days.'),
        feature('layers', 'Distribución', 'Distribution', 'Observa cómo repartes tu tiempo.', 'See how you distribute your time.'),
      ]),
      branch('check', 'Mi día', 'My day', [
        feature('check', 'Actividades', 'Activities', 'Da seguimiento a lo que planeaste hacer.', 'Follow up on what you planned to do.'),
        feature('settings', 'Ajustes', 'Adjustments', 'Adapta tu planificación cuando cambia el día.', 'Adapt your plan when the day changes.'),
      ]),
      branch('activity', 'Hábitos', 'Habits', [
        feature('activity', 'Continuidad', 'Continuity', 'Integra las actividades que quieres repetir.', 'Include the activities you want to repeat.'),
        feature('history', 'Seguimiento', 'Tracking', 'Revisa el avance de tus rutinas.', 'Review the progress of your routines.'),
      ]),
      branch('book', 'Reflexionar', 'Reflect', [
        feature('book', 'Reflexión diaria', 'Daily reflection', 'Registra cómo viviste el día.', 'Record how you experienced the day.'),
        feature('heart', 'Balance', 'Balance', 'Relaciona tus actividades con el bienestar que buscas.', 'Connect your activities with the wellbeing you are seeking.'),
      ]),
      branch('shield', 'Mis datos', 'My data', [
        feature('shield', 'Control local', 'Local control', 'Trabaja con el estado guardado en el dispositivo.', 'Work with state stored on the device.'),
        feature('swap', 'Transferencias', 'Transfers', 'Confirma los intercambios de datos y revisa conflictos.', 'Confirm data transfers and review conflicts.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart', 'Interfaz y reglas de planificación separadas en capas.', 'Interface and planning rules separated into layers.'),
      tech(text('Repositorio local', 'Local repository'), 'Adaptadores para guardar y recuperar el estado del plan en el dispositivo.', 'Adapters to save and retrieve plan state on the device.'),
      tech('Supabase + PostgreSQL', 'Infraestructura de desarrollo para identidad, datos y API de negocio.', 'Development infrastructure for identity, data and the business API.'),
      tech('Docker + Edge Runtime', 'Ejecución local de los servicios del backend para desarrollar y verificar flujos.', 'Local backend services for developing and checking workflows.'),
      tech('Flutter Localizations', 'Textos y formatos locales para la experiencia bilingüe.', 'Localized text and formatting for the bilingual experience.'),
    ],
  },
  'quoteflow': {
    icon: 'receipt', accent: '#edbd7a',
    headline: text('De una pregunta sobre repuestos a una cotización clara.', 'From a parts question to a clear quote.'),
    story: [
      text('Encuentra la pieza, revisa su compatibilidad y entiende el precio. QuoteFlow explora cómo un asistente conversacional puede acompañar una consulta de repuestos con respuestas conectadas a un catálogo.', 'Find the part, check its fit and understand the price. QuoteFlow explores how a conversational assistant can guide a parts inquiry with answers grounded in a catalog.'),
      text('Un prototipo pensado para hacer más ágil la atención comercial: consultas guiadas, alternativas relacionadas y cotizaciones informativas desglosadas. La demostración utiliza un catálogo sintético.', 'A prototype designed to streamline sales assistance: guided inquiries, related options and itemized informational quotes. The demonstration uses a synthetic catalog.'),
    ],
    technical: text('Aplicación Next.js con un asistente conectado a OpenAI Responses y herramientas del servidor para buscar piezas, validar compatibilidad y elaborar cotizaciones. Los precios salen del catálogo y los cálculos se realizan con reglas deterministas en centavos. Zod valida las entradas; SQLite cubre el entorno local y Redis gestiona contadores de uso en el despliegue privado. No procesa pedidos ni pagos.', 'A Next.js application with an assistant connected to OpenAI Responses and server tools for finding parts, checking fitment and preparing quotes. Prices come from the catalog and calculations use deterministic rules in cents. Zod validates inputs; SQLite supports the local environment and Redis manages usage counters in the private deployment. It does not process orders or payments.'),
    branches: [
      branch('chat', 'Consultar', 'Ask', [
        feature('chat', 'Asistente', 'Assistant', 'Explica qué repuesto necesitas en una conversación.', 'Explain which part you need in a conversation.'),
        feature('car', 'Tu vehículo', 'Your vehicle', 'Aporta los datos necesarios para orientar la consulta.', 'Provide the details needed to guide the inquiry.'),
      ]),
      branch('search', 'Encontrar', 'Find', [
        feature('search', 'Catálogo', 'Catalog', 'Busca piezas dentro del catálogo de demostración.', 'Search parts in the demonstration catalog.'),
        feature('layers', 'Relacionados', 'Related parts', 'Consulta sugerencias curadas de piezas relacionadas.', 'Explore curated suggestions for related parts.'),
      ]),
      branch('check', 'Compatibilidad', 'Fitment', [
        feature('car', 'Validación', 'Validation', 'Contrasta la pieza con los datos del vehículo.', 'Check the part against the vehicle details.'),
        feature('book', 'Información', 'Information', 'Aclara los datos que faltan antes de continuar.', 'Clarify missing details before continuing.'),
      ]),
      branch('receipt', 'Cotizar', 'Get a quote', [
        feature('receipt', 'Desglose', 'Breakdown', 'Reúne piezas, cantidades y precios del catálogo.', 'Bring together parts, quantities and catalog prices.'),
        feature('check', 'Totales', 'Totals', 'Consulta una cotización informativa con cálculos verificables.', 'View an informational quote with verifiable calculations.'),
      ]),
      branch('shield', 'Mi sesión', 'My session', [
        feature('shield', 'Acceso privado', 'Private access', 'La demostración utiliza acceso controlado por código.', 'The demonstration uses code-controlled access.'),
        feature('activity', 'Uso', 'Usage', 'La sesión opera con límites de uso definidos.', 'The session operates within defined usage limits.'),
      ]),
    ],
    technologies: [
      tech('Next.js + React + TypeScript', 'Interfaz web y funciones del servidor con contratos tipados.', 'Web interface and server functions with typed contracts.'),
      tech('OpenAI Responses API', 'Asistente que invoca herramientas controladas para consultar datos y preparar respuestas.', 'Assistant invoking controlled tools to query data and prepare responses.'),
      tech('Zod', 'Validación de argumentos antes de ejecutar herramientas del servidor.', 'Argument validation before executing server tools.'),
      tech('CSV + SQLite', 'Catálogo sintético de demostración y persistencia del entorno local.', 'Synthetic demonstration catalog and local environment persistence.'),
      tech('Vercel + Upstash Redis', 'Despliegue web privado y contadores de uso compartidos.', 'Private web deployment and shared usage counters.'),
    ],
  },
  'mesh-lab': {
    icon: 'network', accent: '#8edbed',
    headline: text('La conexión empieza con quienes tienes cerca.', 'Connection starts with the people nearby.'),
    story: [
      text('Cuando el contexto está fuera de la cobertura habitual, la cercanía puede abrir otra forma de comunicarse. Mesh Lab investiga el intercambio local de mensajes, ubicación y notas de voz entre dispositivos próximos.', 'Beyond familiar coverage, proximity can open another way to communicate. Mesh Lab explores local exchange of messages, location and voice notes between nearby devices.'),
      text('Un laboratorio y SDK para llevar estas capacidades a otras apps, con herramientas para observar las conexiones y probarlas en campo. El alcance depende de los dispositivos y los transportes disponibles.', 'A lab and SDK for bringing these capabilities into other apps, with tools to inspect connections and test them in the field. Range depends on the devices and available transports.'),
    ],
    technical: text('Aplicación de laboratorio Flutter sobre un núcleo compartido en Rust. Puentes Kotlin y Swift conectan el motor con las capacidades nativas. Mesh Field SDK expone sesiones, intercambio de objetos y diagnóstico a apps consumidoras. El motor contempla almacenamiento duradero y replicación; el transporte local no necesita internet, pero su disponibilidad depende del hardware, los permisos y la plataforma.', 'A Flutter lab application built on a shared Rust core. Kotlin and Swift bridges connect the engine to native capabilities. Mesh Field SDK exposes sessions, object exchange and diagnostics to consumer apps. The engine supports durable storage and replication; local transport does not require internet, but availability depends on hardware, permissions and platform.'),
    branches: [
      branch('search', 'Descubrir', 'Discover', [
        feature('search', 'Dispositivos cercanos', 'Nearby devices', 'Detecta participantes mediante los transportes disponibles.', 'Detect participants through available transports.'),
        feature('users', 'Sesiones', 'Sessions', 'Reúne dispositivos dentro de un contexto compartido.', 'Bring devices into a shared context.'),
      ]),
      branch('chat', 'Intercambiar', 'Exchange', [
        feature('chat', 'Mensajes', 'Messages', 'Envía texto mediante comunicación local.', 'Send text through local communication.'),
        feature('pin', 'Ubicación', 'Location', 'Intercambia posiciones entre participantes.', 'Exchange positions between participants.'),
        feature('mic', 'Notas de voz', 'Voice notes', 'Prueba el envío de audio entre dispositivos.', 'Test audio exchange between devices.'),
      ]),
      branch('network', 'La red', 'The network', [
        feature('network', 'Enlaces', 'Links', 'Observa las conexiones activas del entorno.', 'Inspect active connections in the environment.'),
        feature('layers', 'Replicación', 'Replication', 'Explora cómo se distribuyen los datos entre nodos.', 'Explore how data moves between nodes.'),
      ]),
      branch('activity', 'Probar', 'Test', [
        feature('activity', 'Diagnóstico', 'Diagnostics', 'Consulta estados y eventos durante las pruebas.', 'Inspect states and events during testing.'),
        feature('map', 'En campo', 'In the field', 'Evalúa el comportamiento con dispositivos reales.', 'Evaluate behavior with real devices.'),
      ]),
      branch('code', 'Integrar', 'Integrate', [
        feature('code', 'SDK', 'SDK', 'Conecta las funciones del motor con otra aplicación.', 'Connect engine capabilities to another application.'),
        feature('phone', 'Plataformas', 'Platforms', 'Usa puentes nativos para Android y Apple.', 'Use native bridges for Android and Apple.'),
      ]),
    ],
    technologies: [
      tech('Flutter + Dart', 'Interfaz del laboratorio y API del SDK para aplicaciones Flutter.', 'Lab interface and SDK API for Flutter applications.'),
      tech('Rust', 'Núcleo compartido de protocolos, sesiones, almacenamiento y replicación.', 'Shared core for protocols, sessions, storage and replication.'),
      tech('Kotlin + Swift', 'Integración con servicios y transportes nativos de Android y Apple.', 'Integration with native Android and Apple services and transports.'),
      tech('Mesh Field SDK + FFI', 'Capa de integración que conecta las apps consumidoras con el motor.', 'Integration layer connecting consumer apps to the engine.'),
      tech('Bluetooth / Wi-Fi Aware', 'Transportes de proximidad sujetos a soporte del dispositivo y de cada plataforma.', 'Proximity transports subject to device and platform support.'),
    ],
  },
};
