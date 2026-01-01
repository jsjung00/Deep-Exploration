import Image from './Image'
import Link from './Link'

export function ResearchProject({
  title,
  authors,
  venue,
  year,
  projectPage,
  arxiv,
  github,
  video,
  description,
  image,
  highlighted = false,
}) {
  // Parse authors to make some bold (your name) and others as links
  const renderAuthors = (authorsArray) => {
    return authorsArray.map((author, index) => {
      const isLast = index === authorsArray.length - 1
      const separator = isLast ? '' : ', '

      if (author.bold) {
        return (
          <span key={index}>
            <strong>{author.name}</strong>
            {separator}
          </span>
        )
      }

      if (author.url) {
        return (
          <span key={index}>
            <Link href={author.url} className="text-primary-500 hover:text-primary-600">
              {author.name}
            </Link>
            {separator}
          </span>
        )
      }

      return (
        <span key={index}>
          {author.name}
          {separator}
        </span>
      )
    })
  }

  return (
    <div
      className={`flex gap-4 rounded-lg p-4 ${
        highlighted ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-gray-50 dark:bg-gray-800/50'
      }`}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={160}
            height={160}
            className="rounded object-cover"
          />
        ) : (
          <div className="flex h-28 w-40 items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
            <span className="text-sm text-gray-400">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-medium leading-tight text-gray-500">{title}</h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{renderAuthors(authors)}</p>

        <p className="text-sm italic text-gray-500 dark:text-gray-400">
          {venue}, {year}
        </p>

        {/* Links */}
        <p className="mt-1 space-x-2 text-sm">
          {projectPage && (
            <Link href={projectPage} className="text-primary-500 hover:text-primary-600">
              project page
            </Link>
          )}
          {projectPage && arxiv && <span className="text-gray-400">/</span>}
          {arxiv && (
            <Link href={arxiv} className="text-primary-500 hover:text-primary-600">
              paper
            </Link>
          )}
          {(projectPage || arxiv) && github && <span className="text-gray-400">/</span>}
          {github && (
            <Link href={github} className="text-primary-500 hover:text-primary-600">
              code
            </Link>
          )}
          {(projectPage || arxiv || github) && video && <span className="text-gray-400">/</span>}
          {video && (
            <Link href={video} className="text-primary-500 hover:text-primary-600">
              video
            </Link>
          )}
        </p>

        {description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        )}
      </div>
    </div>
  )
}

export function ResearchSection({ title, description, children }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>}
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  )
}
