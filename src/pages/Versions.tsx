import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Versions = () => {
  const versions = [
    {
      version: "2.0.0",
      date: "March 2024",
      changes: [
        "Complete UI redesign",
        "New dark theme",
        "Improved code completion",
        "Real-time collaboration features"
      ]
    },
    {
      version: "1.5.0",
      date: "January 2024",
      changes: [
        "Added Git integration",
        "Enhanced debugging tools",
        "Performance improvements",
        "New extension marketplace"
      ]
    },
    {
      version: "1.0.0",
      date: "October 2023",
      changes: [
        "Initial release",
        "Basic code editing features",
        "Syntax highlighting",
        "File management system"
      ]
    }
  ];

  return (
    <main className="bg-editor-dark min-h-screen pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Version History
            <span className="bg-gradient-to-r from-editor-purple to-editor-light bg-clip-text text-transparent">
              {" "}
              CDE
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Track our journey of continuous improvement and innovation.
          </p>
        </div>

        {/* Version Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-editor-purple">Version</TableHead>
                <TableHead className="text-editor-purple">Release Date</TableHead>
                <TableHead className="text-editor-purple">Changes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {versions.map((version) => (
                <TableRow key={version.version} className="border-editor-purple/20">
                  <TableCell className="font-medium text-white">
                    {version.version}
                  </TableCell>
                  <TableCell className="text-gray-400">{version.date}</TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside text-gray-400">
                      {version.changes.map((change, index) => (
                        <li key={index}>{change}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default Versions;