<script>
	import Container from '$lib/components/styled/Container.svelte';
</script>

<Container>
	<h1>Atoms</h1>

	<a name="colors" />
	<h2>Colors</h2>

	<ul>
		<li>
			<span />
			<span>black</span>
		</li>
		<li>
			<span class="sg-swatch bg white" />
			<span class="sg-label">white</span>
		</li>
		<li>
			<span class="sg-swatch bg error" />
			<span class="sg-label">error</span>
		</li>
	</ul>

	<a name="fonts" />
	<h2 class="sg-subheading">Fonts</h2>

	<p>Primary font: "font-name", sans-serif;</p>
	<p><em>Primary font italic: "font-name", sans-serif;</em></p>
	<p><strong>Primary font bold: "font-name", sans-serif;</strong></p>
	<p class="font-secondary">Secondary font: "font-name", cursive;</p>
	<p class="font-secondary"><em>Secondary font italic: "font-name", cursive;</em></p>
	<p class="font-secondary"><strong>Secondary font bold: "font-name", cursive;</strong></p>

	<a name="headings" />
	<h2 class="sg-subheading">Headings</h2>

	<h1>Heading Level 1</h1>
	<h2>Heading Level 2</h2>
	<h3>Heading Level 3</h3>
	<h4>Heading Level 4</h4>
	<h5>Heading Level 5</h5>
	<h6>Heading Level 6</h6>

	<a name="paragraphs" />
	<h2 class="sg-subheading">Paragraphs</h2>

	<p>
		A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a
		self-contained unit of a discourse in writing dealing with a particular point or idea. A
		paragraph consists of one or more sentences. Though not required by the syntax of any language,
		paragraphs are usually an expected part of formal writing, used to organize longer prose.
	</p>

	<div class="sg-element">
		<a name="blockquotes" />
		<h2 class="sg-subheading">Blockquotes</h2>

		<blockquote>Full Quote</blockquote>
		<blockquote>Left Quote</blockquote>
		<blockquote>Right Quote</blockquote>
	</div>

	<div class="sg-element">
		<a name="text" />
		<h2 class="sg-subheading">Text</h2>

		<div class="text">
			<p><a href="#">This is a text link</a></p>

			<p><strong>Strong is used to indicate strong importance</strong></p>

			<p><em>This text has added emphasis</em></p>
		</div>
	</div>

	<a name="hr" />
	<h2 class="sg-subheading">Horizontal Rule</h2>

	<hr />

	<a name="unordered-lists" />
	<h2 class="sg-subheading">Unordered Lists</h2>

	<div class="block-content">
		<ul>
			<li>This is a list item in an unordered list</li>
			<li>
				An unordered list is a list in which the sequence of items is not important. Sometimes, an
				unordered list is a bulleted list. And this is a long list item in an unordered list that
				can wrap onto a new line.
			</li>
			<li>
				Lists can be nested inside of each other
				<ul>
					<li>This is a nested list item</li>
					<li>This is another nested list item in an unordered list</li>
				</ul>
			</li>
			<li>This is the last list item</li>
		</ul>
	</div>

	<a name="ordered-lists" />
	<h2 class="sg-subheading">Ordered Lists</h2>

	<div class="block-content">
		<ol>
			<li>This is a list item in an ordered list</li>
			<li>
				An ordered list is a list in which the sequence of items is important. An ordered list does
				not necessarily contain sequence characters.
			</li>
			<li>
				Lists can be nested inside of each other
				<ol>
					<li>This is a nested list item</li>
					<li>This is another nested list item in an ordered list</li>
				</ol>
			</li>
			<li>This is the last list item</li>
		</ol>
	</div>

	<a name="form-elements" />
	<h2 class="sg-subheading">Form Elements</h2>

	<a name="buttons" />
	<h2 class="sg-subheading">Buttons</h2>

	<p>
		<a class="btn btn-primary" href="#">Primary Button - Link</a>
		<a class="btn btn-secondary" href="#">Secondary Button - Link</a>
	</p>

	<p>
		<button class="btn btn-primary">Primary Button - Button</button>
		<button class="btn btn-secondary">Secondary Button - Button</button>
	</p>

	<p>
		<a class="play-button" href="#" aria-label="Play Video">
			<span class="fa fa-play" />
		</a>
	</p>

	<a name="callout-links" />
	<h2 class="sg-subheading">Callout Links</h2>

	<a name="tables" />
	<h2 class="sg-subheading">Tables</h2>

	<table>
		<thead>
			<tr>
				<th>Table Heading 1</th>
				<th>Table Heading 2</th>
				<th>Table Heading 3</th>
				<th>Table Heading 4</th>
				<th>Table Heading 5</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Table Cell 1</td>
				<td>Table Cell 2</td>
				<td>Table Cell 3</td>
				<td>Table Cell 4</td>
				<td>Table Cell 5</td>
			</tr>
			<tr>
				<td>Table Cell 1</td>
				<td>Table Cell 2</td>
				<td>Table Cell 3</td>
				<td>Table Cell 4</td>
				<td>Table Cell 5</td>
			</tr>
			<tr>
				<td>Table Cell 1</td>
				<td>Table Cell 2</td>
				<td>Table Cell 3</td>
				<td>Table Cell 4</td>
				<td>Table Cell 5</td>
			</tr>
			<tr>
				<td>Table Cell 1</td>
				<td>Table Cell 2</td>
				<td>Table Cell 3</td>
				<td>Table Cell 4</td>
				<td>Table Cell 5</td>
			</tr>
		</tbody>
	</table>

	<div class="sg-element">
		<a name="disclaimer" />
		<h2 class="sg-subheading">Disclaimer</h2>

		<div class="block-disclaimer">
			<p>
				Disclaimer text style: Special must be booked a minimum of two weeks from planned arrival
				date. Also, must include your telephone number so a theme can be discussed. Valid for 1, 2
				or 3 bedroom condo, lakeview or lakefront. Valid Fall-Spring.
			</p>
		</div>
	</div>

	<div class="sg-element">
		<a name="social-icons" />
		<h2 class="sg-subheading">Social Icons</h2>
	</div>
</Container>
